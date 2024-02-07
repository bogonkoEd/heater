import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";

const Welcome= () => {
  const loadIn = () => {
    console.log("Check In");
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const todayDate = selectedDate
    ? selectedDate.toString().substring(0, 15)
    : "";

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>Heat Check</Text>
      </View>
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={setSelectedDate} />
        <Text style={styles.subtext}>Selected Date: {todayDate}</Text>
      </View>
      <View style={styles.buttonBox}>
        <Button onPress={loadIn} title="Check In" color="#00f" />
      </View>
      <StatusBar style="auto" />
    </View>
  );


};

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: "#a090ff",
    },
    appTitle: {
      fontSize: 60,
      fontWeight: "bold",
      color: "#000",
    },
    titleContainer: {
      justifyContent: "flex-start",
      alignSelf: "center",
      marginTop: 100,
    },
    calendarContainer: {
      height: 450,
      width: "auto",
      backgroundColor: "#fff",
      borderRadius: 20,
      marginHorizontal: 5,
      marginTop: 20,
      paddingTop: 40,
      marginBottom: 20,
    },
    subtext: {
      fontSize: 10,
      fontWeight: "bold",
      color: "#000",
      alignSelf: "center",
      marginTop: 10,
    },
    buttonBox: {
      justifyContent: "flex-end",
      alignSelf: "center",
      margin: 50,
      width: 200,
    },
  });
export default Welcome; 

