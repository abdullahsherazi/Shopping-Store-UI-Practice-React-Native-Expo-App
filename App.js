import React,{Component} from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import SignIn from './src/screen/SignIn';
import ForgetPassword from './src/screen/ForgetPassword';  
import SignUp from './src/screen/SignUp';  
import WomenClothes from './src/screen/WomenClothes';  
import ManClothes from './src/screen/ManClothes';  
import KidsClothes from './src/screen/KidsClothes';  
import BottomTabNavigator from './src/screen/BottomTabNavigator';  
import Inspiration from './src/screen/Inspiration';  
import UnderDevelopment from './src/screen/UnderDevelopment';  
import Shop from './src/screen/Shop';  
import DrawerNavigator from './src/screen/DrawerNavigator';  

const AppNavigator = createStackNavigator(  
    {
    SignIn: {
        screen: SignIn,
        navigationOptions: () => ({
          title: "SIGN IN",
          headerStyle:{
            backgroundColor:"#d9d9d9",
            marginTop:25,
            height:30
          },
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"normal"
          },
          headerTitleContainerStyle:{
            paddingLeft:"2%",
            paddingBottom:19,
          },
          headerTintColor:"#666666"
        })
    },
    Shop:{      
       screen: Shop,
        navigationOptions: () => ({
           header:null
        })
    },
    ForgetPassword:{      
       screen: ForgetPassword,
        navigationOptions: () => ({
          title: "RESET PASSWORD",
          headerStyle:{
            backgroundColor:"#d9d9d9",
            marginTop:25,
            height:30,
            paddingBottom:3
          },
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"normal"
          },
          headerTitleContainerStyle:{
            paddingLeft:"5%",
            paddingBottom:5,
          },
          headerTintColor:"#666666",
        })
    },
    SignUp:{      
       screen: SignUp,
        navigationOptions: () => ({
          title: "SIGN UP",
          headerStyle:{
            backgroundColor:"#d9d9d9",
            marginTop:25,
            height:30,
            paddingBottom:3
          },
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"normal"
          },
          headerTitleContainerStyle:{
            paddingLeft:"5%",
            paddingBottom:5,
          },
          headerTintColor:"#666666",
        })
    },
    WomenClothes:{      
       screen: WomenClothes,
        navigationOptions: () => ({
           header:null
        })
    },
     ManClothes:{      
       screen: ManClothes,
        navigationOptions: () => ({
           header:null
        })
    },
     KidsClothes:{      
       screen: KidsClothes,
        navigationOptions: () => ({
           header:null
        })
    },
     BottomTabNavigator :{
       screen: BottomTabNavigator,
        navigationOptions: () => ({
           header:null
        })
    },
    UnderDevelopment:{
screen: UnderDevelopment,
        navigationOptions: () => ({
           header:null
        })
    },
    Inspiration:{
screen: Inspiration,
        navigationOptions: () => ({
           header:null
        })
    },
    DrawerNavigator:{
      screen: DrawerNavigator,
              navigationOptions: () => ({
                 header:null
              })
          }
  },
    {
      initialRouteName: 'SignIn'
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}