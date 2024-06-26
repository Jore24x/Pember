import * as React from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const JadwalPelajaran = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.jadwalpelajaran, styles.iconLayout]}>
      <LinearGradient
        style={[styles.jadwalpelajaranChild, styles.childPosition]}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
      <ScrollView
        style={styles.groupParent}
        horizontal={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupLayout}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.pelajaran, styles.parentPosition]}>
            <Text style={styles.ipaTypo}>Matematika</Text>
            <Text style={[styles.ipa, styles.ipaTypo]}>IPA</Text>
            <Text style={[styles.ipa, styles.ipaTypo]}>B.Indonesia</Text>
          </View>
          <Text style={[styles.hari, styles.seninTypo]}>Senin</Text>
        </View>
        <View style={[styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.pelajaran, styles.parentPosition]}>
            <Text style={styles.ipaTypo}>Matematika</Text>
            <Text style={[styles.ipa, styles.ipaTypo]}>IPA</Text>
            <Text style={[styles.ipa, styles.ipaTypo]}>B.Indonesia</Text>
          </View>
          <Text style={[styles.hari, styles.seninTypo]}>Selasa</Text>
        </View>
        <View style={[styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.pelajaran, styles.parentPosition]}>
            <Text style={styles.ipaTypo}>Matematika</Text>
            <Text style={[styles.ipa, styles.ipaTypo]}>IPA</Text>
            <Text style={[styles.ipa, styles.ipaTypo]}>B.Indonesia</Text>
          </View>
          <Text style={[styles.hari, styles.seninTypo]}>Rabu</Text>
        </View>
      </ScrollView>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={styles.ipaTypo1}>07.00 - 08.30</Text>
          <Text style={[styles.ipa, styles.ipaTypo1]}>08.30 - 10.00</Text>
          <Text style={[styles.ipa, styles.ipaTypo1]}>10.30 - 12.00</Text>
        </View>
        <Text style={[styles.waktuMasuk, styles.seninTypo]}>Waktu Masuk</Text>
      </View>
      <Text style={[styles.jadwalPelajaran, styles.seninTypo]}>
        Jadwal Pelajaran
      </Text>
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
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 210,
    width: 250,
    backgroundColor:'lightgrey',
    marginHorizontal:5,
    borderRadius:10,
  },
  groupLayout1: {
    height: 210,
    width: "100%",
    backgroundColor:'lightgrey',
    marginHorizontal:5,
    borderRadius:10,
  },
  parentPosition: {
    top: 68,
    position: "absolute",
  },
  ipaTypo1: {
    left:10,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 20,
  },
  ipaTypo: {
    right:18,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 20,
  },
  seninTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  jadwalpelajaranChild: {
    top: -3,
    width: 360,
    height: 439,
    backgroundColor: "transparent",
  },
  ipa: {
    marginTop: 5,
  },
  pelajaran: {
    left: 95,
    fontSize:20,
  },
  hari: {
    top: 15,
    fontSize: 20,
    textAlign: "center",
    left: 105,
  },
  
  
  groupParent: {
    top: 306,
    left: 21,
    position: "absolute",
    width: "100%",
  },
  parent: {
    left: 59,
  },
  waktuMasuk: {
    left: 68,
    fontSize: 20,
    textAlign: "left",
    top: 0,
  },
  rectangleContainer: {
    top: 555,
    left: 48,
    position: "absolute",
  },
  jadwalPelajaran: {
    top: 154,
    left: "20%",
    textAlign: "left",
    fontSize: 30,
  },
  icon: {
    height: "100%",
    top:20,
  },
  epback: {
    left: 10,
    top: 10,
    width: 35,
    height: 35,
    position: "absolute",
  },
  jadwalpelajaran: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
  },
});

export default JadwalPelajaran;
