import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Minus from "../assets/minus.svg";
import Plus from "../assets/plus.svg";
import ChevronRight from "../assets/chevron_right.svg";
import { ROSARIVO_REG, OPEN_SANS_SEMI } from "../assets/theme/fonts";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderTitle}>Cart</Text>
      <View style={styles.cartItems}>
        <View style={styles.imgHolder}>
          <Image
            source={require("../assets/img/cinnamon_cocoa.png")}
            style={styles.img}
          />
          <View>
            <Text style={styles.category}>Cappuccino</Text>
            <Text style={styles.name}>Cinnamon & Cocoa</Text>
            <Text style={styles.price}>₹99</Text>
          </View>
        </View>
        <View style={styles.quantityHolder}>
          <View style={styles.minusIcon}>
            <Minus />
          </View>
          <Text style={styles.quantity}>1</Text>
          <View style={styles.plusIcon}>
            <Plus />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.border} />
        <View style={styles.coupon}>
          <View style={styles.textHolder}>
            <Text style={styles.couponText}>Apply Coupon Code</Text>
            <ChevronRight />
          </View>
          <Image
            source={require("../assets/img/coupon.png")}
            style={styles.couponImg}
          />
        </View>
        <View style={styles.delivery}>
          <Text style={styles.deliveryText}>Delivery Charges</Text>
          <Text style={styles.deliveryCharge}>₹49</Text>
        </View>
        <View style={styles.taxes}>
          <Text style={styles.taxesText}>Taxes</Text>
          <Text style={styles.tax}>₹64.87</Text>
        </View>
        <View style={styles.border} />
        <View style={styles.totalView}>
          <Text style={styles.grandTotal}>Grand Total</Text>
          <Text style={styles.total}>₹1009.87</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>PAY NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201520",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    position: "relative",
  },

  HeaderTitle: {
    ...ROSARIVO_REG,
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },

  border: {
    marginTop: 20,
    borderTopWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderStyle: "dashed",
  },

  cartItems: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    padding: 12,
  },

  img: {
    width: 72,
    height: 72,
    borderRadius: 15,
    marginRight: 12,
  },

  imgHolder: {
    flexDirection: "row",
  },

  category: {
    ...ROSARIVO_REG,
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 8,
  },

  name: {
    ...ROSARIVO_REG,
    fontSize: 12,
    color: "#FFFFFF",
    marginBottom: 8,
  },

  price: {
    ...OPEN_SANS_SEMI,
    fontSize: 16,
    color: "#FFFFFF",
  },

  quantityHolder: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 8,
  },

  minusIcon: {
    paddingVertical: 13.92,
    paddingHorizontal: 8.5,
    backgroundColor: "#EFE3C8",
    borderRadius: 8,
    marginRight: 10,
  },

  plusIcon: {
    padding: 8.5,
    backgroundColor: "#EFE3C8",
    borderRadius: 8,
    marginLeft: 10,
  },

  quantity: {
    ...ROSARIVO_REG,
    fontSize: 20,
    color: "#FFFFFF",
  },

  coupon: {
    position: "relative",
    alignItems: "center",
    marginTop: 10,
  },

  couponImg: {
    width: "100%",
  },

  textHolder: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
    bottom: 0,
    top: 0,
  },

  couponText: {
    ...ROSARIVO_REG,
    fontSize: 14,
    color: "#EFE3C8",
  },

  delivery: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },

  deliveryText: {
    ...ROSARIVO_REG,
    fontSize: 14,
    color: "#FFFFFF",
  },

  deliveryCharge: {
    ...OPEN_SANS_SEMI,
    fontSize: 14,
    color: "#FFFFFF",
  },

  taxes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

  taxesText: {
    ...ROSARIVO_REG,
    fontSize: 14,
    color: "#FFFFFF",
  },

  tax: {
    ...OPEN_SANS_SEMI,
    fontSize: 14,
    color: "#FFFFFF",
  },

  totalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  grandTotal: {
    ...ROSARIVO_REG,
    fontSize: 20,
    color: "#FFFFFF",
  },

  total: {
    ...OPEN_SANS_SEMI,
    fontSize: 20,
    color: "#FFFFFF",
  },

  button: {
    backgroundColor: "#EFE3C8",
    paddingVertical: 11,
    paddingHorizontal: 134,
    borderRadius: 10,
    marginTop: 28,
  },

  buttonText: {
    ...OPEN_SANS_SEMI,
    fontSize: 16,
    color: "#4A2B29",
  },

  footer: {
    position: "absolute",
    bottom: 36,
    left: 16,
    right: 16,
  },
});
