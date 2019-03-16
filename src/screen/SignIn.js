import React from 'react';
import {Text, View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons,AntDesign,FontAwesome,Entypo} from '@expo/vector-icons';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>

  {/* Whole SignIn Area #first container */}
      <View style={styles.container1}>
  {/* Email Area */}
      <View style={{flexDirection:"row",paddingBottom:15}}>
      <MaterialCommunityIcons name="email-outline" size={20} color="black" style={{paddingTop:15}}  /> 
      <TextInput placeholder="Email" style={styles.Input} />
      </View>
{/* hr line */}
      <View style={styles.hr} />
  {/* Password Area */}
      <View style={{flexDirection:"row",paddingTop:15}}>
      <AntDesign name="lock" size={20} color="black" style={{paddingTop:15}}  /> 
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.Input} />
      </View>

      <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerNavigator')} style={styles.signIn}>
       <Text style={{fontSize:20, color:"white",textAlign:"center",fontWeight:"bold"}}> SIGN IN </Text>
      </TouchableOpacity>

      <TouchableOpacity   onPress={() => this.props.navigation.navigate('ForgetPassword')}>
      <Text style={{textAlign:"center",marginTop:20}}>Forget password?</Text>
      </TouchableOpacity>
      </View>
{/* 2nd Container */}

      <View style={styles.container2}>
        <View style={{width:"100%", borderColor: 'black', borderWidth:.4}}>
         </View>

        <View style={{paddingLeft:50,paddingRight:50,paddingTop:30}}>
            <Text style={{fontSize:15, textAlign:"center"}}>OR, SIGN IN USING SOCIAL NETWORKS</Text>
        </View>
{/* facebook twitter icon */}
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{marginRight:10}}>
      <FontAwesome name="facebook-square" size={100} color="#003399" style={{paddingTop:15}}  /> 
        </TouchableOpacity>
        
        <TouchableOpacity >
      <FontAwesome name="twitter-square" size={100} color="#4d88ff" style={{paddingTop:15}}  /> 
        </TouchableOpacity>
      
      </View>
      <View style={{paddingLeft:50,paddingRight:50,paddingTop:30,flexDirection:"row"}}>
            <Text style={{fontSize:15, textAlign:"center"}}>Not a Member? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={{fontSize:15, textAlign:"center", color:"#cca300"}}>SIGN UP</Text>
            </TouchableOpacity>
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
            marginTop:30
           },

           container1:{
            flex: 1,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'flex-start',
            backgroundColor: "white",
            marginTop:20,
            marginLeft:10,
            marginRight:10,
          
           }, container2:{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
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
           signIn:{
            backgroundColor:"#cca300",
            width:"100%",
            marginTop:30,
            height:50,
            paddingTop:10,
            borderRadius:5
           }
        });
    