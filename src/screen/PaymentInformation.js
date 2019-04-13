import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import {AntDesign,Ionicons,FontAwesome} from '@expo/vector-icons';

export default class PaymentInformation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={{backgroundColor:"#e6e6e6",width:"100%",height:60,flexDirection:"row"}}>
          <Ionicons name="md-arrow-back" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"5%"}} 
           onPress={() => this.props.navigation.goBack()} />
          <View style={{borderBottomWidth:0.8,height:33,width:"70%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"5%"}}>
          <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>PAYMENT INFORMATION</Text>
          </View>
        </View>  

         {/* CARDS */}
        <View style={{height:"20%",width:"100%",backgroundColor:"white",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="cc-visa" size={70} color="black" style={{marginRight:"20%"}}/>
            <FontAwesome name="cc-paypal" size={70} color="black" /> 
        </View>

    {/* CARD DETAILS HEADING */}
   <View style={{marginLeft:10}}>
       <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>CARD DETAILS</Text>
       <Text style={{color:"#404040"}}>Enter your debit or credit card details.</Text>
    </View>

    {/* CARD DETAILS AREA */}
<View style={{paddingLeft: 10,paddingRight: 10}}>
    {/* FirstName Area */}
    <View style={{flexDirection:"row",paddingTop:20}}>
          <Ionicons name="ios-person" size={20} color="black" style={{paddingTop:15}}  /> 
        <TextInput placeholder="Name" style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

      {/* Card No */}
      <View style={{flexDirection:"row",paddingTop:20}}>
          <Ionicons name="ios-card" size={20} color="black" style={{paddingTop:15}}  /> 
          <TextInput placeholder="CARD NO" style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />

{/* CODE */}
      <View style={{flexDirection:"row",paddingTop:20}}>
      <AntDesign name="lock" size={20} color="black" style={{paddingTop:15}}  />           
          <TextInput placeholder="CODE" secureTextEntry={true} style={styles.Input} />
      </View>
   {/* hr line */}
      <View style={styles.hr} />
 
    {/* BUTTON */}
      <TouchableOpacity style={styles.Signup}>
       <Text style={{fontSize:20, color:"white",textAlign:"center",fontWeight:"bold"}}> SAVE INFORMATION </Text>
      </TouchableOpacity>
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
           }, 
             hr:{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
           },
           Input:{
            marginTop:10,
            marginBottom:10,
            paddingLeft:10,
            width:"90%"
           },
           Signup:{
            backgroundColor:"#404040",
            width:"100%",
            marginTop:20,
            height:50,
            paddingTop:10,
            borderRadius:5
           }
        });
    