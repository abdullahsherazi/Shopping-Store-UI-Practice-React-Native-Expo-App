import React from 'react';
import {Image,StyleSheet, Text, View,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import {Ionicons,AntDesign} from '@expo/vector-icons';
import manClothes from "./photos/manClothes.jpeg";

export default class ManClothes extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       {/* <View> */}
           {/* HEADER */}
            <View style={{backgroundColor:"white",width:"100%",height:60,flexDirection:"row"}}>
            <Ionicons name="md-arrow-back" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"9%"}}           
           onPress={() => this.props.navigation.navigate('DrawerNavigator')} />
          <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"16%"}}>
           <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>Alpha Store</Text>
          </View>
          <AntDesign name="filter" size={30} color="black" size={30} style={{paddingTop:12,paddingLeft:"20%"}}  /> 
        </View>

        {/* Background Image */}
             <View style={{width:"100%",height:90,backgroundColor: "#003333",opacity: 0.5}}>
        <ImageBackground source={manClothes}  style={{flex:1,width: '100%',height:"100%"}}> 
         <Text style={{fontSize:40,color:"white",textAlign:"center"}}>MEN</Text>
         <Text style={{fontSize:20,color:"white",textAlign:"center"}}>OUTWEAR</Text>
        </ImageBackground>
        </View>

        
          <View style={{width:"100%", backgroundColor:"#d9d9d9", flexDirection:"row",height:45}}>
          <TouchableOpacity> 
          <Text style={{fontSize:12,padding:13,color: "#ff6600",opacity: 0.5}}>All Products</Text>
          </TouchableOpacity>
          <TouchableOpacity> 
          <Text style={{fontSize:12,padding:13}}>Jeans</Text>
          </TouchableOpacity>
           <TouchableOpacity> 
          <Text style={{fontSize:12,padding:13}}>T-Shirts</Text>
          </TouchableOpacity>
           <TouchableOpacity> 
          <Text style={{fontSize:12,padding:13}}>Shoes</Text>
          </TouchableOpacity>
           <TouchableOpacity> 
          <Text style={{fontSize:12,padding:13}}>Accessories</Text>
          </TouchableOpacity>
       
        </View>
      <ScrollView >

          {/* ITEM */}
          <View style={{flexDirection:"row",height:100}}>
          {/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={require('./photos/shirt1.jpg')}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>Gildan Ultra Cotton T-shirt</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ 900</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:"3%",marginLeft:"53%"}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>50% SALE</Text>
              </View>
              </View>
          </View>
      {/* hr  */}
                <View style={styles.hr} ></View>

                
                 {/* ITEM */}
          <View style={{flexDirection:"row",height:100}}>
          {/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={require('./photos/shirt2.jpg')}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>Oxford Button-Down Shirt</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ 600</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:"3%",marginLeft:"53%"}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>20% SALE</Text>
              </View>
              </View>
          </View>
                <View style={styles.hr} ></View>

                 {/* ITEM */}
          <View style={{flexDirection:"row",height:100}}>
          {/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={require('./photos/shirt3.jpg')}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>Dress Shirt</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ 1000</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:"3%",marginLeft:"53%"}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>10% SALE</Text>
              </View>
              </View>
          </View>
                <View style={styles.hr} ></View>

                 {/* ITEM */}
          <View style={{flexDirection:"row",height:100}}>
          {/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={require('./photos/shirt4.jpg')}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>Flannel Shirt</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ 100</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:"3%",marginLeft:"53%"}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>40% SALE</Text>
              </View>
              </View>
          </View>
                <View style={styles.hr} ></View>

                 {/* ITEM */}
          <View style={{flexDirection:"row",height:100}}>
          {/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={require('./photos/shirt5.jpg')}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>Office Shirt</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ 200</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:"3%",marginLeft:"53%"}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>35% SALE</Text>
              </View>
              </View>
          </View>
                <View style={styles.hr} ></View>

                       {/* ITEM */}
          <View style={{flexDirection:"row",height:100}}>
          {/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={require('./photos/shirt6.jpg')}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>Party Shirt</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ 350</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:"3%",marginLeft:"53%"}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>55% SALE</Text>
              </View>
              </View>
          </View>
                <View style={styles.hr} ></View>

      </ScrollView>

     </View>
    )
  }
}


const styles = StyleSheet.create({

  container:{
   flex: 1,
   justifyContent: 'flex-start',
   paddingTop:"6.5%"
  },
  hr:{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
           },
});