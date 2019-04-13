import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class CustomerService extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={{backgroundColor:"#e6e6e6",width:"100%",height:60,flexDirection:"row"}}>
          <Ionicons name="md-arrow-back" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"5%"}} 
           onPress={() => this.props.navigation.goBack()} />
          <View style={{borderBottomWidth:0.8,height:33,borderTopWidth:0.8,marginTop:12,marginLeft:40}}>
          <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>CUSTOMER SERVICE</Text>
          </View>
        </View>  

        {/* CONTENT */}
        <View style={{backgroundColor:"white",padding:15}}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({

           container:{
            flex: 1,
            justifyContent: 'flex-start',
            marginTop:24
           }
        });
    