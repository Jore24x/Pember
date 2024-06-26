import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const MenuKalender = () => {
  const navigation = useNavigation();
  const [showText, setShowText] = React.useState(true);
  const [currentMonth, setCurrentMonth] = React.useState('2024-06');

  const handleMonthChange = (month) => {
    const newMonth = `${month.year}-${String(month.month).padStart(2, '0')}`;
    setCurrentMonth(newMonth);
    setShowText(newMonth === '2024-06');
  };

  return (
    <View style={[styles.menukalender, styles.iconLayout]}>
      <LinearGradient
        style={styles.menukalenderChild}
        locations={[0, 0.68]}
        colors={["rgba(15, 255, 255, 0.25)", "rgba(255, 255, 255, 0.25)"]}
      />
      <Text style={styles.kalenderSekolah}>Kalender Sekolah</Text>
      <Pressable style={styles.epback} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/epback@3x.png")}
        />
      </Pressable>
      <Calendar
        style={styles.calendar}
        markingType={'period'}
        markedDates={{
          '2024-06-10': { marked: true, color: 'red', textColor: 'black' },
          '2024-06-18': { startingDay: true, color: 'lightblue' },
          '2024-06-19': { color: 'lightblue' },
          '2024-06-20': { color: 'lightblue' },
          '2024-06-21': { color: 'lightblue' },
          '2024-06-22': { color: 'lightblue' },
          '2024-06-23': { color: 'lightblue' },
          '2024-06-24': { color: 'lightblue' },
          '2024-06-25': { selected: true, endingDay: true, color: 'lightblue', textColor: 'black' },
        }}
        onMonthChange={handleMonthChange}
      />
      {showText && (
        <View>
          <Text style={styles.agenda}>10 Idul Adha</Text>
          <Text style={styles.agenda1}>18-25 UAS</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menukalenderChild: {
    top: -3,
    left: 0,
    width: 360,
    height: 439,
    backgroundColor: "transparent",
    position: "absolute",
  },
  kalenderSekolah: {
    marginLeft: -128,
    top: 154,
    left: "53%",
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
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
  menukalender: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
  },
  calendar: {
    top: 250,
  },
  agenda: {
    top: 260,
    left: 20,
    fontSize: 20,
    color: 'red',
  },
  agenda1: {
    top: 260,
    left: 20,
    fontSize: 20,
    color: 'lightblue',
  },
});

export default MenuKalender;
