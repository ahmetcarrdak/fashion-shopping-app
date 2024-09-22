import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../components/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Cards from "../utils/Cards";
import { products } from "../data/Products";
import Slider from "../components/Slider";

//@ts-ignore
function HomeScreen({ navigation }) {
  const item = products.length;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.head}>Explore</Text>
        {/*}
        <Image
          source={require("../assets/banner_2.png")}
          style={styles.Image}
        />
        {*/}
        <Slider></Slider>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 30,
          }}
        >
          <View>
            <Text style={styles.head_2}>Women's Clothing</Text>
            <Text style={styles.item}>{item} items found</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="now-widgets" size={24} color={Colors.silver} />
          </TouchableOpacity>
        </View>
        <Cards />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 70,
  },
  head: {
    color: Colors.dark,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  Image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
    marginTop: 20,
  },
  head_2: {
    color: Colors.dark,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  item: {
    color: Colors.silver,
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;