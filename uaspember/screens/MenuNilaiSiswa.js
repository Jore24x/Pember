import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable, ActivityIndicator,FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { FontSize, Color, FontFamily } from '../GlobalStyles';

const MenuNilaiSiswa = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView
      style={[styles.menunilaisiswa, styles.iconLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.menuNilaiSiswaScrollViewContent}
    >
      <LinearGradient
        style={styles.menunilaisiswaChild}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
       <View style={styles.container}>
      
    </View>
      <View style={styles.nilaiSiswaParent}>
        <Text style={styles.nilaiSiswa}>Nilai Siswa</Text>
        <View style={styles.groupParent}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupChild, styles.framePosition,styles.box]} />

            <View style={[styles.groupWrapper, styles.wrapperLayout,]}>
              <View style={[styles.frameWrapper, styles.wrapperLayout]}>
                <View style={[styles.frameParent, styles.framePosition]}>
                  <View style={styles.parentFlexBox}>
                    <Text style={styles.tugas}>Tugas</Text>
                    <Text style={styles.tugas}>70</Text>
                  </View>
                  <View style={[styles.utsParent, styles.parentFlexBox]}>
                    <Text style={styles.tugas}>UTS</Text>
                    <Text style={styles.tugas}>75</Text>
                  </View>
                  <View style={[styles.utsParent, styles.parentFlexBox]}>
                    <Text style={styles.tugas}>UAS</Text>
                    <Text style={styles.tugas}>89</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.matematika, styles.pelajaran]}>Matematika</Text>
          </View>

            <View style={[styles.rectangleGroup, styles.groupLayout,styles.box,]}>
              <View style={[styles.groupChild, styles.framePosition]} />
              <View style={[styles.groupWrapper, styles.wrapperLayout]}>
                <View style={[styles.frameWrapper, styles.wrapperLayout]}>
                  <View style={[styles.frameParent, styles.framePosition]}>
                    <View style={styles.parentFlexBox}>
                      <Text style={styles.tugas}>Tugas</Text>
                      <Text style={styles.tugas}>100</Text>
                    </View>
                    <View style={[styles.utsParent, styles.parentFlexBox]}>
                      <Text style={styles.tugas}>UTS</Text>
                      <Text style={styles.tugas}>80</Text>
                    </View>
                    <View style={[styles.utsParent, styles.parentFlexBox]}>
                      <Text style={styles.tugas}>UAS</Text>
                      <Text style={styles.tugas}>90</Text>
                    </View>
                  </View>
                </View>
            </View>

            <Text style={[styles.ipa, styles.pelajaran]}>IPA</Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout,styles.box]}>
            <View style={[styles.groupChild, styles.framePosition]} />
            <View style={[styles.groupWrapper, styles.wrapperLayout]}>
              <View style={[styles.frameWrapper, styles.wrapperLayout]}>
                <View style={[styles.frameParent, styles.framePosition]}>
                  <View style={styles.parentFlexBox}>
                    <Text style={styles.tugas}>Tugas</Text>
                    <Text style={styles.tugas}>95</Text>
                  </View>
                  <View style={[styles.utsParent, styles.parentFlexBox]}>
                    <Text style={styles.tugas}>UTS</Text>
                    <Text style={styles.tugas}>70</Text>
                  </View>
                  <View style={[styles.utsParent, styles.parentFlexBox]}>
                    <Text style={styles.tugas}>UAS</Text>
                    <Text style={styles.tugas}>90</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.bindonesia, styles.pelajaran]}>B.Indonesia</Text>
          </View>

        </View>
      </View>
      <Pressable style={styles.epback} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/epback@3x.png")}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box:{
    backgroundColor:'lightgray'
  },
  menuNilaiSiswaScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  wrapperLayout: {
    height: 118,
    width: 211,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 211,
    alignItems: "center",
  },
  pelajaran: {
    fontSize: 20,
    position: "absolute",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupLayout: {
    height: 220,
    width: 319,
  },
  menunilaisiswaChild: {
    width: 360,
    height: 439,
    backgroundColor: "transparent",
    zIndex: 0,
  },
  nilaiSiswa: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 30,
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
    height: 220,
    width: 319,
  },
  tugas: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 20,
  },
  utsParent: {
    marginTop: 5,
  },
  frameParent: {
    justifyContent: "center",
    position: "absolute",
  },
  frameWrapper: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 78,
    left: 54,
  },
  matematika: {
    top: 15,
    left:110,
    
  },
  ipa: {
    top: 15,
    left:150,
  },
  rectangleGroup: {
    marginTop: 20,
    borderRadius:10,
  },
  bindonesia: {
    top: 15,
    left:110,
  },
  groupParent: {
    marginTop: 55,
  },
  nilaiSiswaParent: {
    zIndex: 1,
    marginTop: -344,
    alignItems: "center",
  },
  icon: {
    height: "100%",
  },
  epback: {
    left: 10,
    top: 20,
    width: 35,
    height: 35,
    zIndex: 2,
    position: "absolute",
  },
  menunilaisiswa: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
  },
});

export default MenuNilaiSiswa;
