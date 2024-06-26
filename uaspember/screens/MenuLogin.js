import React, {useState,useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const MenuLogin = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://f4f8-182-0-249-217.ngrok-free.app/siswa')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching data: ', error);
        Alert.alert('Error', 'Gagal mengambil data pengguna');
      });
  }, []);

  const handleLogin = () => {
    const user = users.find(user => user.id === id && user.password === password);
    if (user) {
      navigation.navigate('Home', { nama: user.nama }, {id: user.id});  // Pindah ke layar Home setelah login sukses
    } else {
      Alert.alert("Login Gagal", "Email atau Password salah");
    }
  };
  return (
    <View style={styles.menulogin}>
      <LinearGradient
        style={styles.menuloginChild}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
      <View style={styles.groupParent}>
        <View style={styles.booksParent}>
          <Image
            style={[styles.booksIcon, styles.booksIconPosition]}
            contentFit="cover"
            source={require("../assets/books@3x.png")}
          />
          <Text style={[styles.akademika, styles.loginClr]}>Akademika</Text>
        </View>
        <View style={styles.frameParent}>
          <View>
            <TextInput
              style={[styles.frameChild, styles.frameTypo, styles.border]}
              placeholder="Id"
              keyboardType="numeric"
              multiline={false}
              secureTextEntry={false}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              onChangeText={setId}
              value={id}
            />
            <TextInput
              style={[styles.frameItem, styles.frameTypo,styles.border]}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              onChangeText={setPassword}
              autoCapitalize="none"

            />
          </View>
          <TouchableOpacity
            style={[styles.rectangleParent, styles.groupChildLayout]}
            activeOpacity={0.2}
            onPress={handleLogin}
          >
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.login, styles.frameTypo]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border:{
    borderWidth:1,
    paddingLeft:5,
    borderRadius:10,
  },
  booksIconPosition: {
    top: 0,
    position: "absolute",
  },
  loginClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  frameTypo: {
    fontSize: FontSize.uI16Medium_size,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  groupChildLayout: {
    height: 45,
    width: 120,
  },
  menuloginChild: {
    top: -3,
    width: 360,
    height: 439,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
  },
  booksIcon: {
    marginLeft: -44.5,
    width: 90,
    height: 88,
    left: "50%",
  },
  akademika: {
    left:5,
    top: 103,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  
  },
  booksParent: {
    width: 165,
    height: 139,
  },
  frameChild: {
    height: 48,
    width: 266,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  frameItem: {
    marginTop: 20,
    height: 48,
    width: 266,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: "#a6ff98",
    top: 0,
    position: "absolute",
    left: 0,
  },
  login: {
    top: 13,
    left: 38,
    textAlign: "right",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 30,
  },
  frameParent: {
    marginTop: 50,
    alignItems: "center",
  },
  groupParent: {
    marginLeft: -133,
    top: 79,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  menulogin: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MenuLogin;
