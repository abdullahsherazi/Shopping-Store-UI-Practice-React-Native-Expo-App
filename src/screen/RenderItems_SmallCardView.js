import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class RenderItems_SmallCardView extends React.Component {
  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");

    return (
      <View>
        <View style={{ alignItems: "center" }}>
          {/* ITEM */}
          <View
            style={{
              marginTop: 10,
              height: 200,
              width: "50%",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ItemInformation", {
                  ItemPrice: this.props.ItemPrice,
                  ItemName: this.props.ItemName,
                  ItemPhoto: this.props.ItemPhoto
                })
              }
            >
              {/* ITEM IMAGE */}
              <View style={{ width: "100%" }}>
                <Image
                  source={this.props.ItemPhoto}
                  resizeMode="contain"
                  style={{ width: "100%", height: 100 }}
                />
              </View>
              {/* ITEM DESCRIPTION */}
              <View style={{ width: "100%", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 13, color: "#3d5c5c", fontWeight: "bold" }}
                >
                  {this.props.ItemName}
                </Text>
                <Text
                  style={{ fontSize: 12, paddingTop: 5, fontWeight: "bold" }}
                >
                  $ {this.props.ItemPrice}
                </Text>
                {/* 50% SALE */}
                <View
                  style={{
                    width: 100,
                    height: 20,
                    backgroundColor: "#cca300",
                    borderRadius: 2,
                    marginTop: 5
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    {this.props.ItemSale}% {i18n.t("sale")}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(RenderItems_SmallCardView);
