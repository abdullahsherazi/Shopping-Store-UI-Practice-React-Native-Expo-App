import React from 'react';
import {Image,StyleSheet,Text,View,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ItemInformation extends React.Component {
 
  render() {
    return (
         <View style={styles.container}>
       {/* <View> */}
           {/* HEADER */}
            <View style={{backgroundColor:"#e6e6e6",width:"100%",height:60,flexDirection:"row",flex:0.1}}>
          <Ionicons name="md-arrow-back" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"9%"}} 
           onPress={() => this.props.navigation.goBack()} />
          <View style={{borderBottomWidth:0.8,height:33,borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:20}}>
           <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>{this.props.navigation.getParam('ItemName')}</Text>
          </View>
        </View>
{/* IMAGE AREA */}
        <View style={{flex:0.8}}>
        <Image source={this.props.navigation.getParam('ItemPhoto')}  resizeMode="contain" style={{width:"100%",height:"100%"}} />
      </View>
{/* price and button area */}
        <View style={{backgroundColor:"#e6e6e6",flex:.1,height:"100%",flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontSize:30,marginRight:50,marginLeft:10}}>$ {this.props.navigation.getParam('ItemPrice')}</Text>
        <TouchableOpacity style={{width:150,height:30,backgroundColor:"#cca300",borderRadius:3,paddingTop:5}}>
                  <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>ADD TO CART</Text>
        </TouchableOpacity>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   justifyContent: 'flex-start',
   marginTop:24
  },
});