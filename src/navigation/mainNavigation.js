import React from "react";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartActive from "../assets/active_cart.svg";
import CartInActive from "../assets/inactive_cart.svg";
import HomeActive from "../assets/active_home.svg";
import HomeInActive from "../assets/inactive-home.svg";
import FavoriteActive from "../assets/active_heart.svg";
import FavoriteInActive from "../assets/inactive_heart.svg";
import BellActive from "../assets/active_bell.svg";
import BellInActive from "../assets/inactive_bell.svg";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#22151F",
            height: 55,
            paddingTop: 5,
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <HomeActive /> : <HomeInActive />,
          }}
        />
        <Tab.Screen
          name="Market"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <CartActive /> : <CartInActive />,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <FavoriteActive /> : <FavoriteInActive />,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <BellActive /> : <BellInActive />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainNavigation;
