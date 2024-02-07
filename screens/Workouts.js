import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Workouts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workouts</Text>
      </View>
      <View style={styles.box}>
      <View style ={styles.cards}><Text style={styles.label}>The Run</Text></View>
      <View style ={styles.cards}><Text style={styles.label}>Morning Glory</Text></View>
      <View style ={styles.cards}><Text style={styles.label}>Till Dusk</Text></View>
      </View>
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a090ff",
  },
  header: {
    height: 100,
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
  },
  box: {
    height: "70%",
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: 'space-around',
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
});
