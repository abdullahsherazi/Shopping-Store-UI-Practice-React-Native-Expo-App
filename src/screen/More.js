import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class More extends React.Component {
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
        </View>

        {/* MY ACCOUNT AREA */}
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 60,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#404040" }}>
            {i18n.t("my_account")}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#e6e6e6",
            width: "100%",
            height: 150,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* BUTTON OF 1 ORDER IN PROGRESS */}
          <TouchableOpacity
            style={{
              backgroundColor: "#404040",
              width: "80%",
              borderRadius: 5,
              height: "40%"
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialCommunityIcons name="reload" size={30} color="white" />
              <Text style={{ color: "white" }}>{i18n.t("order")}</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", marginRight: "25%", fontSize: 12 }}>
              {i18n.t("last_order")}:30/12/2014
            </Text>
            <Text style={{ color: "black", fontSize: 12 }}>
              {i18n.t("ID")}:c49532022
            </Text>
          </View>
        </View>
        {/* PAYMENT INFORMATION AREA */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PaymentInformation")}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 60,
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
              <SimpleLineIcons name="notebook" size={30} color="#404040" />
              <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
                {i18n.t("payment_information")}
              </Text>
            </View>
            <View style={{ width: "30%", alignItems: "flex-end" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="#404040"
                style={{ marginRight: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* SETTINGS AREA */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Setting")}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 60,
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
              <AntDesign name="setting" size={30} color="#404040" />
              <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
                {i18n.t("setting")}
              </Text>
            </View>
            <View style={{ width: "30%", alignItems: "flex-end" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="#404040"
                style={{ marginRight: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* LANGUAGE AREA */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Language")}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 60,
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
              <FontAwesome name="language" size={30} color="#404040" />
              <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
                {i18n.t("language")}
              </Text>
            </View>
            <View style={{ width: "30%", alignItems: "flex-end" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="#404040"
                style={{ marginRight: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
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

export default connect(mapStateToProps)(More);
