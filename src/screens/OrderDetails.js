import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Back from "../assets/chevron_arrow_left.svg";
import Heart from "../assets/heart.svg";
import Star from "../assets/star.svg";
import {
  ROSARIVO_REG,
  OPEN_SANS_REG,
  OPEN_SANS_Bold,
  OPEN_SANS_SEMI,
} from "../assets/theme/fonts";
import { useNavigation } from "@react-navigation/native";

const OrderDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Back />
        </Pressable>
        <Image
          source={require("../assets/img/main_bg.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.bodyView}>
        <View style={styles.bodyHeader}>
          <Text style={styles.cappuccino}>Cappuccino</Text>
          <Heart />
        </View>
        <View style={styles.desc}>
          <Text style={styles.drizzled}>Drizzled with Caramel</Text>
          <View style={styles.rating}>
            <Star />
            <Text style={styles.ratings}>4.5</Text>
          </View>
        </View>
        <Text style={styles.bodyDesc}>
          A single espresso shot poured into hot foamy milk, with the surface
          topped with mildly sweetened cocoa powder and drizzled with
          scrumptious caramel syrup ...
          <Text style={styles.readMore}> Read More</Text>
        </Text>
      </View>
      <View style={styles.choicesView}>
        <Text style={styles.choice}>Choice of Milk</Text>
        <View style={styles.choicesHolder}>
          <Text style={styles.oat}>Oat Milk</Text>
          <Text style={styles.soy}>Soy Milk</Text>
          <Text style={styles.almond}>Almond Milk</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceHolder}>
          <Text style={styles.priceName}>Price</Text>
          <Text style={styles.price}>₹249</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buyNow}>BUY NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#201520",
    paddingHorizontal: 16,
  },

  headerView: {
    position: "relative",
  },

  backIcon: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(239, 227, 200, 0.25)",
    padding: 12,
    borderRadius: 100,
    left: 10,
    top: 24,
  },

  img: {
    width: "100%",
    borderRadius: 40,
  },

  bodyView: {
    marginTop: 16,
  },

  bodyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cappuccino: {
    fontSize: 24,
    color: "#FFFFFF",
    ...ROSARIVO_REG,
  },

  desc: {
    flexDirection: "row",
    marginTop: 8,
  },

  drizzled: {
    fontSize: 16,
    color: "#FFFFFF",
    ...ROSARIVO_REG,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 21,
  },

  ratings: {
    marginLeft: 5,
    fontSize: 12,
    color: "#FFFFFF",
    ...ROSARIVO_REG,
  },

  bodyDesc: {
    marginTop: 8,
    fontSize: 14,
    color: "#FFFFFF",
    ...OPEN_SANS_REG,
  },

  readMore: {
    fontSize: 14,
    color: "#FFFFFF",
    ...OPEN_SANS_Bold,
    textDecorationLine: "underline",
  },

  choicesView: {
    marginTop: 30,
  },

  choicesHolder: {
    flexDirection: "row",
    alignItems: "center",
  },

  choice: {
    fontSize: 14,
    color: "#FFFFFF",
    ...ROSARIVO_REG,
  },

  oat: {
    fontSize: 14,
    paddingVertical: 9.5,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#EFE3C8",
    color: "#201520",
    ...ROSARIVO_REG,
  },

  soy: {
    fontSize: 14,
    paddingVertical: 9.5,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: "#EFE3C8",
    color: "#EFE3C8",
    ...ROSARIVO_REG,
  },

  almond: {
    fontSize: 14,
    paddingVertical: 9.5,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: "#EFE3C8",
    color: "#EFE3C8",
    ...ROSARIVO_REG,
  },

  footer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  priceName: {
    fontSize: 14,
    color: "#FFFFFF",
    ...OPEN_SANS_REG,
  },

  price: {
    marginTop: 9,
    fontSize: 24,
    color: "#FFFFFF",
    ...OPEN_SANS_SEMI,
  },

  button: {
    backgroundColor: "#EFE3C8",
    paddingVertical: 11,
    paddingHorizontal: 83.49,
    borderRadius: 10,
  },

  buyNow: {
    fontSize: 16,
    color: "#4A2B29",
    ...OPEN_SANS_SEMI,
  },
});
