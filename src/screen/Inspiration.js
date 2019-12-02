import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class Inspiration extends React.Component {
  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");
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
          <View style={{ width: "20%", alignItems: "center" }}>
            <MaterialIcons
              name="local-grocery-store"
              size={30}
              style={{ paddingTop: 12, paddingLeft: "20%" }}
            />
          </View>
        </View>

        {/* IMAGE AREA */}
        <View style={{ flex: 1, backgroundColor: "#262626", opacity: 0.8 }}>
          <ImageBackground
            source={require("./photos/girlBackground.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                flexDirection: "row",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1.5,
                  height: "10%",
                  borderTopWidth: 1.5,
                  marginLeft: 18
                }}
              >
                <Text style={{ fontSize: 30, color: "white" }}>
                  {i18n.t("life")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1.5,
                  height: "10%",
                  borderTopWidth: 1.5,
                  marginLeft: 18
                }}
              >
                <Text style={{ fontSize: 30, color: "white" }}>
                  {i18n.t("fashion")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderBottomWidth: 1.5,
                  height: "10%",
                  borderTopWidth: 1.5,
                  marginLeft: 18
                }}
              >
                <Text style={{ fontSize: 30, color: "white" }}>
                  {i18n.t("videos")}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
export default connect(mapStateToProps)(Inspiration);
