import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MenuPembelajaran = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menupembelajaran, styles.iconLayout]}>
      <LinearGradient
        style={styles.menupembelajaranChild}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
      <Text style={styles.pembelajaran}>Pembelajaran</Text>
      <View style={styles.frameParent}>
        <Pressable
          style={styles.wrapperLayout,styles.box}
          onPress={() => navigation.navigate("MenuMatematika")}
        >
          <Text style={[styles.text,]}>Matematika</Text>
        </Pressable>
        <Pressable
          style={[styles.ipaWrapper, styles.wrapperLayout,styles.box]}
          onPress={() => navigation.navigate("MenuIpa")}
        >
          <Text style={[styles.text,]}>IPA</Text>
        </Pressable>
        <Pressable
          style={[styles.ipaWrapper, styles.wrapperLayout,styles.box]}
          onPress={() => navigation.navigate("MenuBindo")}
        >
          <Text style={[styles.text,]}>B.Indonesia</Text>
        </Pressable>
      </View>
      <Pressable style={styles.epback} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/epback@3x.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  box:{
    width:235,
    height:50,
    backgroundColor:'lightgray',
    left:10,
  },
  text: {
    textAlign: "center",
    top: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 20,
    left: 60,
    position: "absolute",
  },
  wrapperLayout: {
    height: 78,
    width: 259,
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  menupembelajaranChild: {
    top: -3,
    left: 0,
    width: 360,
    height: 439,
    backgroundColor: "transparent",
    position: "absolute",
  },
  pembelajaran: {
    marginLeft: -95,
    top: 154,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 30,
    left: "50%",
    position: "absolute",
  },
  
  ipaWrapper: {
    marginTop: 20,
  },
  
  frameParent: {
    top: 257,
    left: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  epback: {
    left: 10,
    top: 20,
    width: 35,
    height: 35,
    position: "absolute",
  },
  menupembelajaran: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
  },
});

export default MenuPembelajaran;
