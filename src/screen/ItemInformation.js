import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";
import OverLayPic from "./OverLayPic";

const mapStateToProps = state => ({
  Language: state.Lang
});

class ItemInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      ItemPhoto: this.props.navigation.getParam("ItemPhoto")
    };
  }
  _toggleOverLay = () => {
    //Toggling the visibility state of the OverLay
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
            flex: 0.1,
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
          <View style={{ width: "64%", alignItems: "center" }}>
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
                {this.props.navigation.getParam("ItemName")}
              </Text>
            </View>
          </View>
        </View>
        {/* IMAGE AREA */}

        <View style={{ flex: 0.8 }}>
          <TouchableOpacity onPress={this._toggleOverLay}>
            <Image
              source={this.props.navigation.getParam("ItemPhoto")}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>
        </View>

        {/* price and button area */}
        <View
          style={{
            backgroundColor: "#e6e6e6",
            flex: 0.1,
            height: "100%",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, marginRight: 50, marginLeft: 10 }}>
            $ {this.props.navigation.getParam("ItemPrice")}
          </Text>
          <TouchableOpacity
            style={{
              width: 150,
              height: 30,
              backgroundColor: "#cca300",
              borderRadius: 3,
              paddingTop: 5
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white"
              }}
            >
              {i18n.t("add_to_cart")}
            </Text>
          </TouchableOpacity>
        </View>

        <OverLayPic
          visible={this.state.visible}
          _toggleOverLay={this._toggleOverLay}
          ItemPhoto={this.state.ItemPhoto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 24
  }
});

export default connect(mapStateToProps)(ItemInformation);
