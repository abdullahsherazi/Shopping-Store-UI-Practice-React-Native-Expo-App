import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import {Feather,MaterialIcons} from '@expo/vector-icons';

export default class Inspiration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/* HEADER AREA     */}
       <View style={{backgroundColor:"#e6e6e6",width:"100%",height:60,flexDirection:"row",marginTop:24}}>
       <Feather name="menu" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"7%"}} 
       onPress={() => this.props.navigation.toggleDrawer()}  />
      <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"18%"}}>
          <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>Alpha Store</Text>
      </View>
      <MaterialIcons name="local-grocery-store" size={30} style={{paddingTop:12,paddingLeft:"20%"}}  /> 
     </View>

     {/* IMAGE AREA */}
        <View style={{flex:1,backgroundColor:"#262626", opacity:0.8}}>
        <ImageBackground source={require('./photos/girlBackground.jpg')} style={{width:"100%",height:"100%"}}>
        <View style={{flexDirection:"row",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{borderBottomWidth:1.5,height:"10%",borderTopWidth:1.5,marginLeft:18}}>
        <Text style={{fontSize:30,color:"white"}}>LIFE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1.5,height:"10%",borderTopWidth:1.5,marginLeft:18}}>
        <Text style={{fontSize:30,color:"white"}}>FASHION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1.5,height:"10%",borderTopWidth:1.5,marginLeft:18}}>
        <Text style={{fontSize:30,color:"white"}}>VIDEOS</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

           container:{
            flex: 1,
            justifyContent: 'flex-start'
           }
        });
    