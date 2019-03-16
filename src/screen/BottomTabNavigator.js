import React from 'react'; 
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Shop from './Shop';
import Inspiration from './Inspiration';
import UnderDevelopment from './UnderDevelopment';

import { MaterialCommunityIcons,Feather,SimpleLineIcons,Entypo,Ionicons,FontAwesome } from '@expo/vector-icons';

export default createMaterialBottomTabNavigator({

  Shop: { 
    screen: Shop,
    navigationOptions:()=>({
    tabBarIcon: ({focused}) => (
      focused ?
      <MaterialCommunityIcons name="hexagon-slice-6" color="black" size={24} />
      :
      <MaterialCommunityIcons name="hexagon-outline" color="black" size={24} />
      )
    }),
  },
    
  Inspiration: {
    screen: Inspiration,
    navigationOptions:()=>({
      tabBarIcon: ({focused}) => (
        focused ?
        <Ionicons name="md-sunny" color="black" size={24} style={{paddingBottom:10}} />
        :
        <Feather name="sun" color="black" size={24} />
      )
    }),
},

  Bag:{
    screen :UnderDevelopment,
    navigationOptions:()=>({
      tabBarIcon: ({focused}) => (
        focused ?
    <FontAwesome name="shopping-bag" color="black"  size={24}  />
    :
    <SimpleLineIcons name="handbag" color="black" size={24} />
      )
    }),
  },

  Favorites:{
    screen :UnderDevelopment,
    navigationOptions:()=>({
      tabBarIcon: ({focused}) => (
        focused ?
    <Entypo name="heart" color="black" size={24} />
    :
    <Entypo name="heart-outlined" color="black" size={24} />
      )
    }),
  },

  More:{ 
    screen: UnderDevelopment,
    navigationOptions:()=>({
    tabBarIcon: () => (
    <Feather name="more-horizontal" color="black" size={24} />
      )
    }),
  }
},
 
{
  initialRouteName: 'Shop',
  shifting: false,
  activeColor: 'black',
  inactiveColor: '#a0a3ac',
  barStyle: { backgroundColor: 'white', borderTopWidth:0.5 },
});
