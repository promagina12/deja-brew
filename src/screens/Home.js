import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import LOGO from "../assets/logo.svg";
import Profile from "../assets/profile.svg";
import Search from "../assets/search.svg";
import Plus from "../assets/plus.svg";
import Star from "../assets/star.svg";
import { useNavigation } from "@react-navigation/native";
import { ROSARIVO_REG, OPEN_SANS_SEMI } from "../assets/theme/fonts";

const DATA = Array.from({ length: 10 });

const Home = () => {
  const navigation = useNavigation();

  const renderItem = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderDetails")}
          style={styles.imageView}
        >
          <View style={styles.imgHolder}>
            <Image
              source={require("../assets/img/cinnamon_cocoa.png")}
              style={styles.img}
            />
            <View style={styles.rating}>
              <Star />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <Text style={styles.name}>Cinnamon & {"\n"} Cocoa</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>₹99</Text>
            <View style={styles.plusIcon}>
              <Plus />
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View style={styles.headerHolder}>
          <LOGO />
          <View style={styles.profile}>
            <Profile />
          </View>
        </View>
        <View style={styles.searchHolder}>
          <View style={styles.icon}>
            <Search />
          </View>
          <TextInput
            placeholder="Browse your favourite coffee..."
            style={styles.textInput}
            placeholderTextColor="rgba(239, 227, 200, 0.5)"
          />
        </View>
        <View style={styles.textView}>
          <TouchableOpacity>
            <Text style={styles.text}>Flat White</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Espresso</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Americano</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Cappuccino</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          renderItem={renderItem}
          data={DATA}
          numColumns={2}
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201520",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    position: "relative",
  },

  headerHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    borderWidth: 1,
    borderColor: "#DCAA70",
    borderRadius: 50,
    padding: 3,
  },

  searchHolder: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  icon: {
    position: "absolute",
    zIndex: 1,
    left: 20,
  },

  textInput: {
    paddingVertical: 10,
    backgroundColor: "#171017",
    width: "100%",
    paddingLeft: 60,
    borderRadius: 10,
    ...ROSARIVO_REG,
  },

  textView: {
    transform: [{ rotate: "-90deg" }],
    // marginLeft: 180,
    // flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 210,
    left: -273,
    backgroundColor: "rgba(112, 67, 65, 0.3)",
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderBottomRightRadius: 40,
  },

  text: {
    marginLeft: 40,
    fontSize: 14,
    color: "rgba(239, 227, 200, 0.5)",
    ...ROSARIVO_REG,
  },

  text1: {
    marginLeft: 35,
    fontSize: 16,
    color: "#EFE3C8",
    fontWeight: "normal",
  },

  imageView: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12.61,
    marginLeft: 25,
    marginTop: 16,
  },

  img: {
    borderRadius: 15,
  },

  priceView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    justifyContent: "space-between",
    borderRadius: 12,
    position: "relative",
    marginTop: 13,
  },

  plusIcon: {
    backgroundColor: "#EFE3C8",
    position: "absolute",
    padding: 13,
    borderRadius: 12,
    right: 0,
  },

  name: {
    fontSize: 14,
    color: "#FFFFFF",
    paddingTop: 8,
    ...ROSARIVO_REG,
  },

  priceText: {
    fontSize: 16,
    color: "#FFFFFF",
    ...OPEN_SANS_SEMI,
  },

  imgHolder: {
    position: "relative",
  },

  rating: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(65, 65, 65, 0.5)",
    borderTopLeftRadius: 14.9,
    borderBottomRightRadius: 14.9,
    paddingLeft: 6,
    paddingVertical: 5,
    paddingRight: 7,
  },

  ratingText: {
    fontSize: 10,
    color: "#FFFFFF",
    fontWeight: "normal",
    marginLeft: 5,
    ...ROSARIVO_REG,
  },

  flatlist: {
    flex: 1,
    marginTop: 4,
    marginLeft: 25,
  },
});
