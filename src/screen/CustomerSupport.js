import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import {AntDesign,Ionicons,MaterialIcons,Feather} from '@expo/vector-icons';

export default class CustomerSupport extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={{backgroundColor:"#e6e6e6",width:"100%",height:60,flexDirection:"row"}}>
        <Feather name="menu" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"7%"}} 
           onPress={() => this.props.navigation.toggleDrawer()} />
          <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"16%"}}>
           <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>Alpha Store</Text>
          </View>
        </View>  
        {/* CUSTOMER SUPPORT HEADING */}
        <View style={{backgroundColor:"white",width:"100%",height:60,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontWeight:"bold",color:"#404040"}}>CUSTOMER SUPPORT</Text>
        </View>

        <View style={{width:"100%",height:50,justifyContent:"center",alignItems:"center"}}>      
        </View>
        {/* Contact AREA */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')} > 
           <View style={{backgroundColor:"white",width:"100%",height:60,alignItems:"center",flexDirection:"row",borderBottomWidth:0.5,borderBottomColor:"#404040"}}>
           <View style={{width:"70%",flexDirection:"row",height:"100%",alignItems:"center",paddingLeft:10}}>
            <Ionicons name="md-contacts" size={30} color="#404040" />             
            <Text style={{fontWeight:"bold",marginLeft:15}}>Contact</Text>
            </View>
            <View style={{width:"30%",alignItems:"flex-end"}}>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" style={{marginRight:10}} />                         
           </View>
           </View>
        </TouchableOpacity>

        {/* Customer Service AREA */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CustomerService')}>
          <View style={{backgroundColor:"white",width:"100%",height:60,alignItems:"center",flexDirection:"row",borderBottomWidth:0.5,borderBottomColor:"#404040"}}>
           <View style={{width:"70%",flexDirection:"row",height:"100%",alignItems:"center",paddingLeft:10}}>
           <AntDesign name="tool" size={30} color="#404040" />                                               
            <Text style={{fontWeight:"bold",marginLeft:15}}>Customer Service</Text>
            </View>
            <View style={{width:"30%",alignItems:"flex-end"}}>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="#404040" style={{marginRight:10}} />                         
           </View>
          </View>
        </TouchableOpacity>

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
    