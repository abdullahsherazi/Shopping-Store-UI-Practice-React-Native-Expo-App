import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { Dimensions } from "react-native";

import Inspiration from "./Inspiration";
import Bag from "./Bag";
import Favorites from "./Favorites";
import SignIn from "./SignIn";
import BottomTabNavigator from "./BottomTabNavigator";
import More from "./More";
import CustomerSupport from "./CustomerSupport";
import MenuDrawer from "./MenuDrawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.73,
  contentComponent: ({ navigation }) => {
    //MenuDrawer is in other file because cant connect DrawerNavigator and MenuDrawer
    //in connect statement
    return <MenuDrawer navigation={navigation} />;
  }
};

export default createDrawerNavigator(
  {
    Shop: {
      screen: BottomTabNavigator
    },

    Inspiration: {
      screen: Inspiration
    },
    Bag: {
      screen: Bag
    },
    Favorites: {
      screen: Favorites
    },
    My_Account: {
      screen: More
    },
    Customer_Support: {
      screen: CustomerSupport
    },
    Logout: {
      screen: SignIn
    }
  },
  DrawerConfig
);
