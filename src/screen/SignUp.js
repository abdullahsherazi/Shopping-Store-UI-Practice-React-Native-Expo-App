import React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {Ionicons,AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

export default class ForgetPassword extends React.Component {
  render() {
    return (
      <View style={styles.container}>

  {/* Whole SignIn Area #first container */}
      <View style={styles.container1}>
       
       {/* FirstName Area */}
      <View style={{flexDirection:"row",paddingTop:20}}>
          <Ionicons name="ios-person" size={20} color="black" style={{paddingTop:15}}  /> 
        <TextInput placeholder="First Name" style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

      {/* LastName Area */}
      <View style={{flexDirection:"row",paddingTop:20}}>
          <Ionicons name="ios-person" size={20} color="black" style={{paddingTop:15}}  /> 
          <TextInput placeholder="Last Name" style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

      {/* Email Area */}
      <View style={{flexDirection:"row",paddingTop:20}}>
          <MaterialCommunityIcons name="email-outline" size={20} color="black" style={{paddingTop:15}}  /> 
          <TextInput placeholder="Email" style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

{/* PASSWORD Area */}
      <View style={{flexDirection:"row",paddingTop:20}}>
      <AntDesign name="lock" size={20} color="black" style={{paddingTop:15}}  />           
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

      {/* Reset PASSWORD Area */}
      <View style={{flexDirection:"row",paddingTop:20}}>
      <AntDesign name="lock" size={20} color="black" style={{paddingTop:15}}  /> 
          <TextInput placeholder="Reset Password" secureTextEntry={true} style={styles.Input}  />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

 
    {/* BUTTON */}
      <TouchableOpacity onPress={this._onPressButton} style={styles.Signup}>
       <Text style={{fontSize:20, color:"white",textAlign:"center",fontWeight:"bold"}}> SIGNUP </Text>
      </TouchableOpacity>

      </View>

{/* 2nd Container */}

    {/* LINE */}
      <View style={styles.container2}>
           <View style={{width:"100%", borderColor: 'black', borderWidth:.4}}>
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
            marginTop:0
           },

           container1:{
            paddingTop: 0,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'flex-start',
            backgroundColor: "white",
            marginTop:10,
            marginLeft:10,
            marginRight:10,
          
           },
           container2:{
            marginTop:20,
            width:"100%",
            height:"100%",
            backgroundColor: "#d9d9d9",
           },

           Input:{
            marginTop:10,
            marginBottom:10,
            paddingLeft:10,
            width:"90%"
           },
           hr:{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
           },
           Signup:{
            backgroundColor:"#cca300",
            width:"100%",
            marginTop:20,
            height:50,
            paddingTop:10,
            borderRadius:5
           }
        });
    