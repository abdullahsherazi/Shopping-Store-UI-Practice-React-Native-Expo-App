import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { Localization } from "expo";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class Language extends React.Component {
  languageArabic = () => {
    this.props.dispatch({ type: "AR" });
  };
  languageEnglish = () => {
    this.props.dispatch({ type: "EN" });
  };

  render() {
    Localization.locale = this.props.Language;
    i18n.locale = Localization.locale;

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
                {i18n.t("language")}
              </Text>
            </View>
          </View>
        </View>

        {/* ENGLISH AREA */}
        <TouchableOpacity onPress={() => this.languageEnglish()}>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 80,
              alignItems: "center",
              flexDirection: "row",
              borderBottomWidth: 0.5,
              borderBottomColor: "#404040"
            }}
          >
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
                paddingLeft: 10
              }}
            >
              <View style={{ width: "40%" }}>
                <Image
                  source={require("../screen/photos/english.png")}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text
                style={{ fontWeight: "bold", marginLeft: 15, fontSize: 20 }}
              >
                {i18n.t("english")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* ARABIC AREA*/}
        <TouchableOpacity onPress={() => this.languageArabic()}>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 80,
              alignItems: "center",
              flexDirection: "row",
              borderBottomWidth: 0.5,
              borderBottomColor: "#404040"
            }}
          >
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
                paddingLeft: 10
              }}
            >
              <View style={{ width: "40%" }}>
                <Image
                  source={require("../screen/photos/arabic.gif")}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text
                style={{ fontWeight: "bold", marginLeft: 15, fontSize: 20 }}
              >
                {i18n.t("arabic")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* CHOOSE Language text */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "#00695c",
              width: "70%",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              {i18n.t("choose_language")}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 24,
    backgroundColor: "#e6e6e6"
  }
});

export default connect(mapStateToProps)(Language);
