import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = ({route}) => {
  const navigation = useNavigation();
  const { nama } = route.params;
  const {id} = route.params

  return (
    <ScrollView
      style={[styles.home, styles.homeLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <LinearGradient
        style={styles.homeChild}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
      <View style={styles.groupParent}>
        <Pressable style={styles.groupChildLayout}
        onPress={() => navigation.navigate("MenuKalender")}>
          <Text style={[styles.kalenderSekolah, styles.nilaiSiswaTypo]}>
            Kalender Sekolah
          </Text>
          <View style={[styles.groupChild, styles.user1IconPosition]} />
          <ImageBackground
            style={[styles.calendar1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/calendar1@3x.png")}
          />
        </Pressable>
        <Pressable style={styles.groupChildLayout}
        onPress={() => navigation.navigate("JadwalPelajaran")}>
          <Text style={[styles.jadwalPelajaran, styles.nilaiSiswaTypo]}>
            Jadwal Pelajaran
          </Text>
          <View style={[styles.groupChild, styles.user1IconPosition]} />
          <ImageBackground
            style={[styles.checklist1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/checklist1@3x.png")}
          />
        </Pressable>
        <Pressable style={styles.groupChildLayout}
        onPress={() => navigation.navigate("MenuPembelajaran")}>
          <Text style={[styles.pembelajaran, styles.nilaiSiswaTypo]}>
            Pembelajaran
          </Text>
          <View style={[styles.groupChild, styles.user1IconPosition]} />
          <ImageBackground
            style={[styles.openBook1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/openbook1@3x.png")}
          />
        </Pressable>
        <Pressable style={styles.groupChildLayout}
        onPress={() => navigation.navigate("MenuNilaiSiswa",{id} )}>
          <Text style={[styles.nilaiSiswa, styles.nilaiSiswaTypo]}>
            Nilai Siswa
          </Text>
          <ImageBackground
            style={[styles.assignment1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/assignment1@3x.png")}
          />
          <View style={[styles.groupChild, styles.user1IconPosition]} />
        </Pressable>
      </View>
      <View style={styles.selamatDatangParent}>
        <Text style={[styles.selamatDatang, styles.namaTypo]}>
          Selamat datang
        </Text>
        <Text style={[styles.nama, styles.namaTypo]}>
          {nama}
        </Text>
        <Image
          style={[styles.user1Icon, styles.user1IconPosition]}
          contentFit="cover"
          source={require("../assets/user-1@3x.png")}
        />
      </View>
      <Pressable
        style={styles.materialSymbolslogoutSharp}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolslogoutsharp@3x.png")}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  homeLayout: {
    overflow: "hidden",
    width: "100%",
  },
  nilaiSiswaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  user1IconPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 75,
    width: 75,
    left: 132,
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -37.5,
    height: 75,
    width: 75,
    left: "50%",
    position: "absolute",
  },
  namaTypo: {
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  homeChild: {
    width: 360,
    height: 439,
    backgroundColor: "transparent",
    zIndex: 0,
  },
  kalenderSekolah: {
    textAlign: "center",
    left: "34%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 94,
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    left: 0,
    height: 122,
    width: 339,
  },
  calendar1Icon: {
    top: 5,
  },
  groupChildLayout: {
    height: 122,
    width: 339,
  },
  jadwalPelajaran: {
    textAlign: "center",
    left: "34%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 94,
  },
  checklist1Icon: {
    top: 9,
  },
  pembelajaran: {
    textAlign: "center",
    left: "37%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 94,
  },
  openBook1Icon: {
    top: 10,
  },
  nilaiSiswa: {
    textAlign: "center",
    left: "41%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 94,
  },
  assignment1Icon: {
    top: 19,
  },
  groupParent: {
    height: 533,
    justifyContent: "space-between",
    zIndex: 1,
    marginTop: -134,
  },
  selamatDatang: {
    marginLeft: -97,
    top: 155,
    textAlign: "left",
    left: "74%",
  },
  nama: {
    marginLeft: -92,
    top: 193,
    textAlign: "left",
    left: "74%",
  },
  user1Icon: {
    left: 20,
    width: 150,
    height: 150,
  },
  selamatDatangParent: {
    top: 26,
    left: 84,
    width: 192,
    height: 223,
    zIndex: 2,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  materialSymbolslogoutSharp: {
    left: 162,
    top: 256,
    width: 35,
    height: 35,
    zIndex: 3,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
  },
});

export default Home;
