import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Ionicons,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';

export default class Contact extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        {/* HEADER */}
        <View style={{width:"100%",height:60,flexDirection:"row"}}>
          <Ionicons name="md-arrow-back" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"5%"}} 
           onPress={() => this.props.navigation.goBack()} />
          <View style={{borderBottomWidth:0.8,height:33,borderTopWidth:0.8,marginTop:12,marginLeft:80}}>
          <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>CONTACT</Text>
          </View>
        </View>

        {/* PHONE NO AREA */}
        <View style={{backgroundColor:"white",width:"100%",height:200,alignItems:"center",justifyContent:"center"}}>
             <View style={{backgroundColor:"#e6b800",width:160,borderRadius:120,height:160,justifyContent:"center",alignItems:"center",borderWidth:3,borderColor:"#e6e6e6"}}>
          <FontAwesome name="phone" size={40} color="white" />
             <Text style={{color:"white"}}>0336-0235730</Text>
             </View>   
        </View>

         {/* Address AREA */}
         <View style={{backgroundColor:"white",width:"100%",height:60,alignItems:"center",flexDirection:"row",borderBottomWidth:0.5,borderColor:"#404040",borderTopWidth:0.5}}>
           <View style={{width:"20%",flexDirection:"row",height:"100%",alignItems:"center",paddingLeft:10}}>
           <FontAwesome name="map-marker" size={30} color="#404040" />                                               
            </View>
            <View style={{width:"80%",alignItems:"flex-end"}}>
            <Text style={{marginRight:10}}>HouseNo:A-4, Sector:W-3, Gulshan-E-Iqbal, Karachi</Text>
           </View>
          </View>

        {/* Email AREA */}
          <View style={{backgroundColor:"white",width:"100%",height:60,alignItems:"center",flexDirection:"row",borderBottomWidth:0.5,borderBottomColor:"#404040"}}>
           <View style={{width:"20%",flexDirection:"row",height:"100%",alignItems:"center",paddingLeft:10}}>
           <MaterialCommunityIcons name="email" size={30} color="#404040" />                                               
            </View>
            <View style={{width:"80%",alignItems:"flex-end"}}>
            <Text style={{marginRight:10}}>abdullahkhan@gmail.com</Text>
           </View>
          </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({

           container:{
            flex: 1,
            justifyContent: 'flex-start',
            marginTop:24,
            backgroundColor:"#e6e6e6"
           }
        });
    