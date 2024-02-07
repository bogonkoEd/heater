import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Mealplan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gameplan</Text>
      </View>
      <View style={styles.waterbox}>
        <Text>Water plan</Text>
      </View>
      <View style={styles.lunchbox}>
        <View style={styles.records}>
          <Text style={styles.label}>First Meal of the Day</Text>
          <View style={styles.separator} />
          <View style={styles.inputBox}>
            <TextInput placeholder="Food" style={styles.foodText} />
            <View style={styles.vseparator} />
            <TextInput placeholder="cal" style={styles.calText} />
          </View>
        </View>
        <View style={styles.records}>
          <Text style={styles.label}>Second Meal of the Day</Text>
          <View style={styles.separator} />
          <View style={styles.inputBox}>
            <TextInput placeholder="Food" style={styles.foodText} />
            <View style={styles.vseparator} />
            <TextInput placeholder="cal" style={styles.calText} />
          </View>
        </View>
        <View style={styles.records}>
          <Text style={styles.label}>Third Meal of the Day</Text>
          <View style={styles.separator} />
          <View style={styles.inputBox}>
            <TextInput placeholder="Food" style={styles.foodText} />
            <View style={styles.vseparator} />
            <TextInput placeholder="cal" style={styles.calText} />
          </View>
        </View>
        <View style={styles.records}>
          <Text style={styles.label}>Cheating, are we?</Text>
          <View style={styles.separator} />
          <View style={styles.inputBox}>
            <TextInput placeholder="Food" style={styles.foodText} />
            <View style={styles.vseparator} />
            <TextInput placeholder="cal" style={styles.calText} />
          </View>
        </View></View>
    </View>
  );
};

export default Mealplan;

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
  waterbox: {
    height: 150,
    width: "auto",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  lunchbox: {
    height: 400,
    width: "auto",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  records: {
    height: 80,
    width: "auto",
    backgroundColor: "#c0c0c0",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
  },
  vseparator: {
    width: 1,
    height: "100%",
    backgroundColor: "#000",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
    marginLeft: 10,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
    height: "50%",
  },
  foodText: {
    fontSize: 14,
    fontWeight: "300",
    backgroundColor: "#fff",
    color: "#000",
    width: "72%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    height: "100%",
    paddingLeft: 5,
  },
  calText: {
    fontSize: 12,
    color: "#909090",
    width: "18%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    height: "60%",
    paddingLeft: 5,
    backgroundColor: "#fff",
  },
});
