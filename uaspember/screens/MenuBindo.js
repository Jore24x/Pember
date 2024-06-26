import * as React from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MenuBindo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menuBindo
    , styles.iconLayout]}>
      <LinearGradient
        style={styles.menuBindoChild}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
      <Text style={styles.bindo
      }>B.indonesia
      </Text>
      <View style={styles.frameParent}>
        <Pressable style={styles.wrapperLayout,styles.box}
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=OUaFkjyWe14&list=PL3KKYhuhdD6ra9XyBRT2R0G9xE7JzKZgY&index=2&pp=iAQB')}>
          <Text style={[styles.pembelajaran1, styles.pembelajaranTypo]}>
            Pembelajaran 1
          </Text>
        </Pressable>
        <Pressable style={[styles.pembelajaran2Wrapper, styles.wrapperLayout,,styles.box]}
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUJcmljayByb2xs')}>
          <Text style={[styles.pembelajaran2, styles.pembelajaranTypo]}>
            Pembelajaran 2
          </Text>
        </Pressable>
        <Pressable style={[styles.pembelajaran2Wrapper, styles.wrapperLayout,,styles.box]}
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=uRbisyWJqZg&list=PL3KKYhuhdD6ra9XyBRT2R0G9xE7JzKZgY&index=3&pp=iAQB')}>
          <Text style={[styles.pembelajaran2, styles.pembelajaranTypo]}>
            Pembelajaran 3
          </Text>
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
  box:{
    width:235,
    height:50,
    backgroundColor:'lightgray',
    left:20,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  pembelajaranTypo: {
    top: 18,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 20,
    left: "70%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 78,
    width: 291,
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  menuBindoChild: {
    top: -3,
    left: 0,
    width: 360,
    height: 439,
    backgroundColor: "transparent",
    position: "absolute",
  },
  bindo
  : {
    marginLeft: -95,
    top: 154,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 30,
    left: "53%",
    position: "absolute",
  },
  pembelajaran1: {
    marginLeft: -111.5,
  },
  pembelajaran2: {
    marginLeft: -113.5,
  },
  pembelajaran2Wrapper: {
    marginTop: 20,
  },
  frameParent: {
    top: 257,
    left: 34,
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
  menuBindo
  : {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
  },
});

export default MenuBindo;
