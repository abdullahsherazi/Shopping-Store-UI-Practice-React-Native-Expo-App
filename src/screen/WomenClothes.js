import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import womanClothes from "./photos/womanClothes.jpeg";
import RenderItems_ListView from "./RenderItems_ListView";
import RenderItems_LargeCardView from "./RenderItems_LargeCardView";
import RenderItems_SmallCardView from "./RenderItems_SmallCardView";
import BottomStyleSheet from "./BottomSheet";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class WomenClothes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          ItemKey: 0,
          ItemName: "Gildan Ultra Cotton T-shirt",
          ItemPrice: 900,
          ItemPhoto: require("./photos/shirt1.jpg"),
          ItemSale: 50
        },
        {
          ItemKey: 1,
          ItemName: "Oxford Button-Down Shirt",
          ItemPrice: 600,
          ItemPhoto: require("./photos/shirt2.jpg"),
          ItemSale: 22
        },
        {
          ItemKey: 2,
          ItemName: "Office Shirt",
          ItemPrice: 3000,
          ItemPhoto: require("./photos/shirt5.jpg"),
          ItemSale: 76
        },
        {
          ItemKey: 3,
          ItemName: "Dress Shirt",
          ItemPrice: 100,
          ItemPhoto: require("./photos/shirt3.jpg"),
          ItemSale: 35
        },
        {
          ItemKey: 4,
          ItemName: "Flannel Shirt",
          ItemPrice: 2000,
          ItemPhoto: require("./photos/shirt4.jpg"),
          ItemSale: 15
        },
        {
          ItemKey: 5,
          ItemName: "Party Shirt",
          ItemPrice: 550,
          ItemPhoto: require("./photos/shirt6.jpg"),
          ItemSale: 66
        }
      ],
      visible: false,
      ListView: 1,
      LargeCardView: 0,
      SmallCardView: 0
    };
  }
  ListView = () => {
    this.setState({
      ListView: 1,
      LargeCardView: 0,
      SmallCardView: 0
    });
  };
  LargeCardView = () => {
    this.setState({
      ListView: 0,
      LargeCardView: 1,
      SmallCardView: 0
    });
  };
  SmallCardView = () => {
    this.setState({
      ListView: 0,
      LargeCardView: 0,
      SmallCardView: 1
    });
  };
  _toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };

  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: "#e6e6e6",
            width: "100%",
            height: 60,
            flexDirection: "row"
          }}
        >
          <View style={{ width: "20%", alignItems: "center" }}>
            <Ionicons
              name="md-arrow-back"
              size={30}
              color="#404040"
              style={{ paddingTop: 12, paddingLeft: "9%" }}
              onPress={() => this.props.navigation.goBack()}
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

          <View style={{ width: "20%", alignItems: "center" }}>
            <MaterialIcons
              name="view-compact"
              size={30}
              color="black"
              size={30}
              style={{ paddingTop: 12, paddingLeft: "20%" }}
              onPress={this._toggleBottomNavigationView}
            />
          </View>
        </View>

        {/* Background Image */}
        <View
          style={{
            width: "100%",
            height: 90,
            backgroundColor: "#ff6600",
            opacity: 0.5
          }}
        >
          <ImageBackground
            source={womanClothes}
            style={{ flex: 1, width: "100%", height: "100%" }}
          >
            <Text style={{ fontSize: 40, color: "white", textAlign: "center" }}>
              {i18n.t("women")}
            </Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              {i18n.t("outwear")}
            </Text>
          </ImageBackground>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#d9d9d9",
            flexDirection: "row",
            height: 5
          }}
        >
          {/* <TouchableOpacity> 
          <Text style={{fontSize:12,padding:13,color: "#ff6600",opacity: 0.5}}>{i18n.t('all_products')}</Text>
           </TouchableOpacity>
           <TouchableOpacity> 
           <Text style={{fontSize:12,padding:13}}>{i18n.t('jeans')}</Text>
           </TouchableOpacity>
            <TouchableOpacity> 
           <Text style={{fontSize:12,padding:13}}>{i18n.t('T-shirts')}</Text>
           </TouchableOpacity>
            <TouchableOpacity> 
           <Text style={{fontSize:12,padding:13}}>{i18n.t('shoes')}</Text>
           </TouchableOpacity>
           <TouchableOpacity> 
           <Text style={{fontSize:12,padding:13}}>{i18n.t('accessories')}</Text>
           </TouchableOpacity>
        */}
        </View>

        <ScrollView>
          {/* Here is is being checked that which view is selected */}

          {this.state.ListView === 1
            ? this.state.items.map(items => {
                //  sending data to RenderItems
                return (
                  <RenderItems_ListView
                    navigation={this.props.navigation}
                    key={items.ItemKey}
                    ItemKey={items.ItemKey}
                    ItemName={items.ItemName}
                    ItemPrice={items.ItemPrice}
                    ItemPhoto={items.ItemPhoto}
                    ItemSale={items.ItemSale}
                  />
                );
              })
            : this.state.LargeCardView === 1
            ? this.state.items.map(items => {
                return (
                  <RenderItems_LargeCardView
                    navigation={this.props.navigation}
                    key={items.ItemKey}
                    ItemKey={items.ItemKey}
                    ItemName={items.ItemName}
                    ItemPrice={items.ItemPrice}
                    ItemPhoto={items.ItemPhoto}
                    ItemSale={items.ItemSale}
                  />
                );
              })
            : this.state.items.map(items => {
                return (
                  <RenderItems_SmallCardView
                    navigation={this.props.navigation}
                    key={items.ItemKey}
                    ItemKey={items.ItemKey}
                    ItemName={items.ItemName}
                    ItemPrice={items.ItemPrice}
                    ItemPhoto={items.ItemPhoto}
                    ItemSale={items.ItemSale}
                  />
                );
              })}
        </ScrollView>

        {/* sending selected view condition to BottomStyleSheet */}
        <BottomStyleSheet
          visible={this.state.visible}
          _toggleBottomNavigationView={this._toggleBottomNavigationView}
          ListView={this.state.ListView}
          LargeCardView={this.state.LargeCardView}
          SmallCardView={this.state.SmallCardView}
          ListViewFunc={this.ListView}
          LargeCardViewFunc={this.LargeCardView}
          SmallCardViewFunc={this.SmallCardView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 24
  }
});
export default connect(mapStateToProps)(WomenClothes);
