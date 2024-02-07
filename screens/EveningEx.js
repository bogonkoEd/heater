import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const EveningEx = () => {
  const loadIn = () => {
    console.log("Check In");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>It's a Wrap!</Text>
      </View>
      <View style={styles.box}></View>
      <Pressable onPress={loadIn} style={styles.button} >
        <Text style={styles.buttonText}>Check Out</Text>
      </Pressable>
    </View>
  );
};

export default EveningEx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a090ff",
  },
  header: {
    height: 60,
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
  },
  box: {
    height: "70%",
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "space-around",
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  cards: {
    height: "auto",
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 5,
    borderColor: "#000",
    borderWidth: 2,
  },
  label: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    margin: 50,
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
  },
});
