import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  import React from "react";
  
  const Drawer = () => {
    const DATA = [
      {
        id: "1",
        title: "Gains",
        description: "Daily Workout Routine for Gains",
        emoji: "🏋🏽‍♂️",
        uri: require("../assets/gym.jpg"),
      },
      {
        id: "2",
        title: "Diet",
        description: "Daily Diet Routine for Losses and Water Intake",
        emoji: "🥤",
        uri: require("../assets/Diet.jpg")
      },
    ];
    const onPress = () => {};
  
    const Item = ({ drawer }) => (
      <Pressable style={styles.itemContainer} onPress={onPress}>
        <Image source={drawer.uri} style={styles.image} />
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>{drawer.title}</Text>
            <Text style={styles.description}>{drawer.description}</Text>
          </View>
          <View style={styles.emoji}>
            <Text>{drawer.emoji}</Text>
          </View>
        </View>
      </Pressable>
    );
  
    return (
      <View style={styles.appContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item drawer={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  
  export default Drawer;
  
  const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: "#a090ff",
    },
    itemContainer: {
      width: "100%",
      marginVertical: 10,
      backgroundColor: "#cc99ff",
      borderRadius: 10,
      padding: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      marginVertical: 5,
    },
    description: {
      fontSize: 14,
      color: "#666",
    },
    emoji: {
      fontSize: 20,
      backgroundColor: "#b266ff",
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
      marginBottom: 10,
    },
  });
  