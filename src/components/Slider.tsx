import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import React, { Component } from "react";
import Swiper from "react-native-swiper";

export default class Slider extends Component {
  render() {
    return (
      <View style={styles.slider}>
        <Swiper
          /* showsButtons={true} isteğe bağlı */
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={styles.paginationStyle}
        >
          <View>
            <Image
              source={require("../assets/banner.png")}
              style={styles.Image}
            />
          </View>
          <View>
            <Image
              source={require("../assets/banner_2.png")}
              style={styles.Image}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slider: {
    height: 200,
    marginBottom: 20,
    marginTop: 20,
  },
  Image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Pasif dot rengi
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: 'white', // Aktif dot rengi
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
  },
  paginationStyle: {
    bottom: 10, // Dots konumunu ayarla
  },
});
