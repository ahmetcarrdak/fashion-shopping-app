import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../components/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Categories from "../data/Categories"; // Kategoriler
import { products } from "../data/Products"; // Ürünler
import { useNavigation } from "@react-navigation/native";

export default function Cards() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigation = useNavigation();
  // Kategori değiştiğinde güncellenen fonksiyon
  //@ts-ignore
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtreleme fonksiyonu
  const filteredProducts =
    selectedCategory === "All"
      ? Object.values(products)
      : Object.values(products).filter(
          (product) => product.categories === selectedCategory
        );

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {["All", ...Object.values(Categories)].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.card,
              selectedCategory === category && styles.activeCards,
            ]}
            onPress={() => handleCategoryChange(category)}
          >
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.shopCards}>
        {filteredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.shopCard}
            //@ts-ignore
            onPress={() => navigation.navigate("Detail", { id: product.id })}
          >
            <TouchableOpacity style={styles.heart}>
              <FontAwesome name="heart" size={17} color={Colors.silver} />
            </TouchableOpacity>
            <Image
              //@ts-ignore
              source={product.image} // Ürün görseli URL'si
              style={styles.image}
            />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>
              {product.description.slice(0, 20)}..
            </Text>
            <Text style={styles.pricing}>${product.price.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.silver,
    borderWidth: 1,
  },
  activeCards: {
    backgroundColor: Colors.pink,
  },
  shopCards: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  shopCard: {
    width: "45%",
    height: 320,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    resizeMode: "cover",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: Colors.white,
    borderRadius: 100,
    padding: 7,
  },
  image: {
    width: "100%",
    height: 230,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 14,
    color: Colors.silver,
  },
  pricing: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "bold",
  },
});
