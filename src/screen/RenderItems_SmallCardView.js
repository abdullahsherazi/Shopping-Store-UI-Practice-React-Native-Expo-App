import React from 'react';
import {Image,Text, View,TouchableOpacity} from 'react-native';

export default class RenderItems_SmallCardView extends React.Component {
  render() {
    return (
<View>
<TouchableOpacity   onPress={() => this.props.navigation.navigate('ItemInformation',{ItemPrice:this.props.ItemPrice,ItemName:this.props.ItemName,ItemPhoto:this.props.ItemPhoto})} >

<View style={{alignItems:"center"}}>

          {/* ITEM */}
          <View style={{marginTop:10,height:200,width:"50%",borderColor:"black",borderWidth:1,borderRadius:5}}>
          {/* ITEM IMAGE */}
              <View style={{width:"100%"}}>
                      <Image source={this.props.ItemPhoto} resizeMode="contain" style={{width:"100%",height:100}}/>
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{width:"100%",alignItems:"center"}}>
              <Text style={{fontSize:13,color:"#3d5c5c",fontWeight:"bold"}}>{this.props.ItemName}</Text>
              <Text style={{fontSize:12,paddingTop:5,fontWeight:"bold"}}>$ {this.props.ItemPrice}</Text>
              {/* 50% SALE */}
              <View style={{width:100,height:20,backgroundColor:"#cca300",borderRadius:2,marginTop:5}}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>{this.props.ItemSale}% SALE</Text>
              </View>
              </View>
          </View>
          </View>

</TouchableOpacity>
</View>   
    )
  }
}