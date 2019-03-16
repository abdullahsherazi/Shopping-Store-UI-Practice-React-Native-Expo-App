import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import {MaterialIcons ,Feather} from '@expo/vector-icons';

import manClothes from "./photos/manClothes.jpeg";
import womanClothes from "./photos/womanClothes.jpeg";
import kidsClothes from "./photos/kidsclothes.jpg";
import winter from "./photos/winter.jpg";
import girl from "./photos/girl.jpg";

export default class Store extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/* Header */}

      <View style={{backgroundColor:"white",width:"100%",height:60,flexDirection:"row",marginTop:24}}>
       <Feather name="menu" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"7%"}} 
       onPress={() => this.props.navigation.toggleDrawer()} />
      <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"18%"}}>
          <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>Alpha Store</Text>
      </View>
      <MaterialIcons name="local-grocery-store" size={30} style={{paddingTop:12,paddingLeft:"20%"}}  /> 
     </View>

      {/* <AppDrawerNavigator /> */}
      <ScrollView style={{color:"white"}}>
        <View style={{width:"100%", alignItems:"center", backgroundColor:"#004d4d", flexDirection:"row",height:40}}>
          <Text style={{color:"#cca300",fontSize:12,paddingLeft:27}}>LAST CHANCE! </Text>
          <Text style={{color:"white",fontSize:12}}>Holiday shipping end soon. </Text>
          <Text style={{fontWeight:"bold", color:"#cca300",fontSize:12}}>SHOP NOW</Text>
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ManClothes')}>
        <View style={{width:"100%",height:90,backgroundColor: "#003333",opacity: 0.5}}>
        <ImageBackground source={manClothes} style={{flex:1,width: '100%',height:"100%"}}> 
         <Text style={{fontSize:40,color:"white",textAlign:"center"}}>MEN</Text>
         <Text style={{fontSize:20,color:"white",textAlign:"center"}}>OUTWEAR</Text>
        </ImageBackground>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('WomenClothes')}>
        <View style={{width:"100%",height:90,backgroundColor: "#ff6600",opacity: 0.5}}>
        <ImageBackground source={womanClothes}  style={{flex:1,width: '100%',height:"100%"}}> 
         <Text style={{fontSize:40,color:"white",textAlign:"center"}}>WOMEN</Text>
         <Text style={{fontSize:20,color:"white",textAlign:"center"}}>OUTWEAR</Text>
        </ImageBackground>
        </View>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('KidsClothes')}>
        <View style={{width:"100%",height:90,backgroundColor: "#0044cc",opacity: 0.5}}>
        <ImageBackground source={kidsClothes}  style={{flex:1,width: '100%',height:"100%"}}> 
         <Text style={{fontSize:40,color:"white",textAlign:"center"}}>KIDS</Text>
         <Text style={{fontSize:20,color:"white",textAlign:"center"}}>OUTWEAR</Text>
        </ImageBackground>
        </View>
        </TouchableOpacity>

        
        <TouchableOpacity>
        <View style={{width:"100%",height:90}}>
        <ImageBackground source={winter}  style={{flex:1,width: '100%',height:"100%"}}> 
         <Text style={{fontSize:15,color:"black",textAlign:"center",fontWeight:"bold",paddingTop:25}}>WINTER SALE</Text>
         <Text style={{fontSize:20,color:"black",textAlign:"center"}}>UP TO 60% OFF</Text>
        </ImageBackground>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{width:"100%",height:120}}>
        <ImageBackground source={girl}  style={{flex:1,width: '100%',height:"100%"}}>
        <TouchableOpacity style={{height:30,backgroundColor:"#cca300",opacity:1,marginTop:55,marginLeft:"70%"}}> 
         <Text style={{fontSize:15,color:"white",textAlign:"right",fontWeight:"bold",paddingTop:5,paddingRight:10}}>SHOP NOW</Text>
        </TouchableOpacity>
        </ImageBackground>
        </View>
        </TouchableOpacity>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
   flex: 1,
   justifyContent: 'flex-start',
  },
});