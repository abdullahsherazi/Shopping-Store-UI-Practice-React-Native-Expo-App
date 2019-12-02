import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from "./src/screen/SignIn";
import ForgetPassword from "./src/screen/ForgetPassword";
import SignUp from "./src/screen/SignUp";
import WomenClothes from "./src/screen/WomenClothes";
import ManClothes from "./src/screen/ManClothes";
import KidsClothes from "./src/screen/KidsClothes";
import DrawerNavigator from "./src/screen/DrawerNavigator";
import PaymentInformation from "./src/screen/PaymentInformation";
import ItemInformation from "./src/screen/ItemInformation";
import Setting from "./src/screen/Setting";
import Contact from "./src/screen/Contact";
import CustomerService from "./src/screen/CustomerService";
import Language from "./src/Language/Language";

import i18n from "i18n-js";
import en from "./src/Language/en";
import ar from "./src/Language/ar";

import { Provider } from "react-redux";
import store from "./src/Redux/store/Store";

// import CustomerSupport from './src/screen/CustomerSupport';
// import More from './src/screen/More';
// import Favorites from './src/screen/Favorites';
// import Bag from './src/screen/Bag';
// import BottomTabNavigator from './src/screen/BottomTabNavigator';
// import Inspiration from './src/screen/Inspiration';
// import UnderDevelopment from './src/screen/UnderDevelopment';
// import Shop from './src/screen/Shop';

const AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: () => ({
        header: null
      })
    },
    ForgetPassword: {
      screen: ForgetPassword,
      navigationOptions: () => ({
        title: i18n.t("forget_password"),
        headerStyle: {
          backgroundColor: "#d9d9d9",
          marginTop: 25,
          height: 30,
          paddingBottom: 3
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "normal"
        },
        headerTitleContainerStyle: {
          paddingLeft: "5%",
          paddingBottom: 5
        },
        headerTintColor: "#666666"
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        title: i18n.t("sign_up"),
        headerStyle: {
          backgroundColor: "#d9d9d9",
          marginTop: 25,
          height: 30,
          paddingBottom: 3
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "normal"
        },
        headerTitleContainerStyle: {
          paddingLeft: "5%",
          paddingBottom: 5
        },
        headerTintColor: "#666666"
      })
    },
    WomenClothes: {
      screen: WomenClothes,
      navigationOptions: () => ({
        header: null
      })
    },
    ManClothes: {
      screen: ManClothes,
      navigationOptions: () => ({
        header: null
      })
    },
    KidsClothes: {
      screen: KidsClothes,
      navigationOptions: () => ({
        header: null
      })
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    PaymentInformation: {
      screen: PaymentInformation,
      navigationOptions: () => ({
        header: null
      })
    },

    ItemInformation: {
      screen: ItemInformation,
      navigationOptions: () => ({
        header: null
      })
    },
    Setting: {
      screen: Setting,
      navigationOptions: () => ({
        header: null
      })
    },
    CustomerService: {
      screen: CustomerService,
      navigationOptions: () => ({
        header: null
      })
    },
    Contact: {
      screen: Contact,
      navigationOptions: () => ({
        header: null
      })
    },

    Language: {
      screen: Language,
      navigationOptions: () => ({
        header: null
      })
    }

    // CustomerSupport:{
    //   screen:  CustomerSupport,
    //             navigationOptions: () => ({
    //                    header:null
    //                })
    //        },
    // More:{
    //   screen: More,
    //             navigationOptions: () => ({
    //                 header:null
    //             })
    //       },
    //  BottomTabNavigator :{
    //    screen: BottomTabNavigator,
    //     navigationOptions: () => ({
    //        header:null
    //     })
    // },
    //     UnderDevelopment:{
    // screen: UnderDevelopment,
    //         navigationOptions: () => ({
    //            header:null
    //         })
    //     },
    //     Inspiration:{
    // screen: Inspiration,
    //         navigationOptions: () => ({
    //            header:null
    //         })
    //     },
    // Favorites:{
    //   screen: Favorites,
    //           navigationOptions: () => ({
    //               header:null
    //           })
    //     },
    //     Bag:{
    //       screen: Bag,
    //               navigationOptions: () => ({
    //                   header:null
    //               })
    //         },
    //    Shop:{
    //    screen: Shop,
    //     navigationOptions: () => ({
    //        header:null
    //     })
    // },
  },
  {
    initialRouteName: "SignIn"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    i18n.fallbacks = true;
    i18n.translations = {
      en,
      ar
    };
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
