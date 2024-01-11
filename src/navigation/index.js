import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./mainNavigation";
import OrderDetails from "../screens/OrderDetails";

const Stack = createStackNavigator();

const IndexNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={MainNavigation} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default IndexNavigation;

const styles = StyleSheet.create({});
