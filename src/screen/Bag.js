import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class Bag extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}

        <View
          style={{
            backgroundColor: "#e6e6e6",
            width: "100%",
            height: 60,
            flexDirection: "row",
            marginTop: 24
          }}
        >
          <View style={{ width: "20%", alignItems: "center" }}>
            <Feather
              name="menu"
              size={30}
              color="#404040"
              style={{ paddingTop: 12, paddingLeft: "7%" }}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </View>
          <View style={{ width: "60%", alignItems: "center" }}>
            <View
              style={{
                borderBottomWidth: 0.8,
                height: 33,
                borderTopWidth: 0.8,
                marginTop: 12
              }}
            >
              <Text
                style={{ fontSize: 20, color: "#404040", textAlign: "center" }}
              >
                {i18n.t("alpha_store")}
              </Text>
            </View>
          </View>
        </View>

        <ScrollView>
          {/* ITEM */}
          <View style={{ flexDirection: "row", height: 100 }}>
            {/* ITEM IMAGE */}
            <View style={{ width: "40%" }}>
              <Image
                source={require("./photos/shirt1.jpg")}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            {/* ITEM DESCRIPTION */}
            <View style={{ width: "60%", paddingTop: "8%" }}>
              <Text
                style={{ fontSize: 15, color: "#3d5c5c", fontWeight: "bold" }}
              >
                Gildan Ultra Cotton T-shirt
              </Text>
              <Text
                style={{ fontSize: 12, paddingTop: "3%", fontWeight: "bold" }}
              >
                $ 900
              </Text>
              {/* Edit button */}
              <View
                style={{
                  width: 100,
                  height: 20,
                  borderRadius: 2,
                  marginLeft: "70%"
                }}
              >
                <Feather name="edit" size={25} color="#404040" />
              </View>
            </View>
          </View>
          {/* hr  */}
          <View style={styles.hr}></View>

          {/* ITEM */}
          <View style={{ flexDirection: "row", height: 100 }}>
            {/* ITEM IMAGE */}
            <View style={{ width: "40%" }}>
              <Image
                source={require("./photos/shirt2.jpg")}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            {/* ITEM DESCRIPTION */}
            <View style={{ width: "60%", paddingTop: "8%" }}>
              <Text
                style={{ fontSize: 15, color: "#3d5c5c", fontWeight: "bold" }}
              >
                Oxford Button-Down Shirt
              </Text>
              <Text
                style={{ fontSize: 12, paddingTop: "3%", fontWeight: "bold" }}
              >
                $ 600
              </Text>
              {/* Edit button */}
              <View
                style={{
                  width: 100,
                  height: 20,
                  borderRadius: 2,
                  marginLeft: "70%"
                }}
              >
                <Feather name="edit" size={25} color="#404040" />
              </View>
            </View>
          </View>
          <View style={styles.hr}></View>

          {/* ITEM */}
          <View style={{ flexDirection: "row", height: 100 }}>
            {/* ITEM IMAGE */}
            <View style={{ width: "40%" }}>
              <Image
                source={require("./photos/shirt3.jpg")}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            {/* ITEM DESCRIPTION */}
            <View style={{ width: "60%", paddingTop: "8%" }}>
              <Text
                style={{ fontSize: 15, color: "#3d5c5c", fontWeight: "bold" }}
              >
                Dress Shirt
              </Text>
              <Text
                style={{ fontSize: 12, paddingTop: "3%", fontWeight: "bold" }}
              >
                $ 1000
              </Text>
              {/* Edit button */}
              <View
                style={{
                  width: 100,
                  height: 20,
                  borderRadius: 2,
                  marginLeft: "70%"
                }}
              >
                <Feather name="edit" size={25} color="#404040" />
              </View>
            </View>
          </View>
          <View style={styles.hr}></View>
        </ScrollView>

        {/* CHECKOUT */}

<<<<<<< HEAD
        <TouchableOpacity
          style={{
            borderRightWidth: 0.6,
            borderLeftWidth: 0.6,
            borderTopWidth: 0.6,
            backgroundColor: "#cca300",
            width: "70%",
            height: 30,
            borderRadius: 7,
            paddingTop: 5,
            marginLeft: "16%"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              {i18n.t("checkout")}
            </Text>
            <FontAwesome
              name="arrow-right"
              size={20}
              color="white"
              style={{ marginLeft: 4 }}
            />
          </View>
        </TouchableOpacity>

        {/* Table Footer "Total Amount" */}
        <View
          style={{
            borderBottomColor: "black",
            borderTopWidth: 0.6,
            borderBottomWidth: 0.6,
            flexDirection: "row",
            height: 30,
            backgroundColor: "#cca300"
          }}
        >
          <View
            style={{
              width: "48%",
              borderRightWidth: 0.6,
              borderLefttWidth: 0.6
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                color: "white",
                marginTop: 3
              }}
            >
              {i18n.t("total_amount")}
            </Text>
          </View>
          <View style={{ borderRightWidth: 0.6, width: "52%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                color: "white",
                marginTop: 3
              }}
            >
              $ 310
            </Text>
          </View>
        </View>
      </View>
=======
<TouchableOpacity style={{borderRightWidth:0.6,borderLeftWidth:0.6,borderTopWidth:0.6,backgroundColor:"#cca300",width:"70%",height:30,borderRadius:7,paddingTop:5,marginLeft:"16%"}} >
  <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <Text style={{textAlign:"center",color:"white",fontWeight:"bold"}}>CHECKOUT</Text>
          <FontAwesome name="arrow-right" size={20}  color="white" style={{marginLeft:4}} />           
  </View>
</TouchableOpacity>


{/* Table Footer "Total Amount" */}
    <View style={{borderBottomColor:"black",borderTopWidth:0.6,borderBottomWidth:0.6,flexDirection:"row",height:30,backgroundColor:"#cca300"}}>
        <View style={{width:"48%",borderRightWidth:0.6,borderLefttWidth:0.6}}><Text style={{textAlign:"center",fontSize:15,color:"white",marginTop:3}} >Total Amount</Text></View>
        <View style={{borderRightWidth:0.6,width:"52%"}}><Text style={{textAlign:"center",fontSize:15,color:"white",marginTop:3}} >$ 310</Text></View>
</View>

      </View>

>>>>>>> f2d560d3c76ef65172457a8178f5d46eeb730d6e
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white"
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
});
export default connect(mapStateToProps)(Bag);
=======
           container:{
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor:"white"
           } ,
           hr:{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
           },
        });
    
>>>>>>> f2d560d3c76ef65172457a8178f5d46eeb730d6e
