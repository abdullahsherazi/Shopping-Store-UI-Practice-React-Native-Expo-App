import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import manClothes from "./photos/manClothes.jpeg";
import womanClothes from "./photos/womanClothes.jpeg";
import kidsClothes from "./photos/kidsclothes.jpg";
import winter from "./photos/winter.jpg";
import girl from "./photos/girl.jpg";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class Store extends React.Component {
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

        <ScrollView style={{ color: "white" }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              backgroundColor: "#004d4d",
              height: 40
            }}
          >
            <Text
              style={{ color: "#cca300", fontSize: 12, textAlign: "center" }}
            >
              {i18n.t("shop_page_last_chance")}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ManClothes")}
          >
            <View
              style={{
                width: "100%",
                height: 90,
                backgroundColor: "#003333",
                opacity: 0.5
              }}
            >
              <ImageBackground
                source={manClothes}
                style={{ flex: 1, width: "100%", height: "100%" }}
              >
                <Text
                  style={{ fontSize: 40, color: "white", textAlign: "center" }}
                >
                  {i18n.t("men")}
                </Text>
                <Text
                  style={{ fontSize: 20, color: "white", textAlign: "center" }}
                >
                  {i18n.t("outwear")}
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("WomenClothes")}
          >
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
                <Text
                  style={{ fontSize: 40, color: "white", textAlign: "center" }}
                >
                  {i18n.t("women")}
                </Text>
                <Text
                  style={{ fontSize: 20, color: "white", textAlign: "center" }}
                >
                  {i18n.t("outwear")}
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("KidsClothes")}
          >
            <View
              style={{
                width: "100%",
                height: 90,
                backgroundColor: "#0044cc",
                opacity: 0.5
              }}
            >
              <ImageBackground
                source={kidsClothes}
                style={{ flex: 1, width: "100%", height: "100%" }}
              >
                <Text
                  style={{ fontSize: 40, color: "white", textAlign: "center" }}
                >
                  {i18n.t("kids")}
                </Text>
                <Text
                  style={{ fontSize: 20, color: "white", textAlign: "center" }}
                >
                  {i18n.t("outwear")}
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ width: "100%", height: 90 }}>
              <ImageBackground
                source={winter}
                style={{ flex: 1, width: "100%", height: "100%" }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: 25
                  }}
                >
                  {i18n.t("winter_sale")}
                </Text>
                <Text
                  style={{ fontSize: 20, color: "black", textAlign: "center" }}
                >
                  {i18n.t("up_to")} 60% {i18n.t("off")}
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ width: "100%", height: 120 }}>
              <ImageBackground
                source={girl}
                style={{ flex: 1, width: "100%", height: "100%" }}
              >
                <TouchableOpacity
                  style={{
                    height: 30,
                    backgroundColor: "#cca300",
                    opacity: 1,
                    marginTop: 55,
                    marginLeft: "70%"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "white",
                      textAlign: "right",
                      fontWeight: "bold",
                      paddingTop: 5,
                      paddingRight: 10
                    }}
                  >
                    {i18n.t("shop_now")}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </ScrollView>
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

export default connect(mapStateToProps)(Store);
