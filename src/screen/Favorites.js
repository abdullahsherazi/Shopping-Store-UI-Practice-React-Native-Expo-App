import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Feather,AntDesign} from '@expo/vector-icons';

export default class Inspiration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         {/* HEADER AREA     */}
         <View style={{backgroundColor:"#e6e6e6",width:"100%",height:60,flexDirection:"row",marginTop:24}}>
          <Feather name="menu" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"7%"}} 
             onPress={() => this.props.navigation.toggleDrawer()} />
          <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"18%"}}>
           <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>Alpha Store</Text>
          </View>
        </View>

    {/* Center favorites area     */}
        <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center",width:"100%"}}>
         <View style={{width:"80%",height:150,borderColor:"black",borderWidth:0.5,backgroundColor:"#e6e6e6",justifyContent:"center",alignItems:"center",borderStyle:"dashed",borderRadius:1}}>
         <AntDesign name="hearto" size={30}  color="#404040"  />
          <Text>You have no items in your favorites list</Text>
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
           } 
        });
    