import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../components/Colors";

//@ts-ignore
function StartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/startBackground.png")}
      ></Image>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Start</Text>
        <AntDesign name="arrowright" size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: "20%",
    borderRadius: 5,
    padding: 15,
    width: 140,
    backgroundColor: Colors.pink,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
});

export default StartScreen;