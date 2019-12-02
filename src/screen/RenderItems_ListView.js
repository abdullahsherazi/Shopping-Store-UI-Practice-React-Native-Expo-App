import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class RenderItems_ListView extends React.Component {
  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");

    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("ItemInformation", {
              ItemPrice: this.props.ItemPrice,
              ItemName: this.props.ItemName,
              ItemPhoto: this.props.ItemPhoto
            })
          }
        >
          {/* ITEM */}
          <View style={{ flexDirection: "row", height: 100 }}>
            {/* ITEM IMAGE */}
            <View style={{ width: "40%" }}>
              <Image
                source={this.props.ItemPhoto}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            {/* ITEM DESCRIPTION */}
            <View style={{ width: "60%", paddingTop: 15 }}>
              <Text
                style={{ fontSize: 15, color: "#3d5c5c", fontWeight: "bold" }}
              >
                {this.props.ItemName}
              </Text>
              <Text style={{ fontSize: 12, paddingTop: 3, fontWeight: "bold" }}>
                $ {this.props.ItemPrice}
              </Text>
              {/* 50% SALE */}
              <View
                style={{
                  width: 100,
                  height: 20,
                  backgroundColor: "#cca300",
                  borderRadius: 2,
                  marginTop: 15,
                  marginLeft: "53%"
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
          </View>
          {/* hr  */}
          <View style={styles.hr}></View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
});

export default connect(mapStateToProps)(RenderItems_ListView);
