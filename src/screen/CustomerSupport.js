import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Feather
} from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class CustomerSupport extends React.Component {
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
        {/* CUSTOMER SUPPORT HEADING */}
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
            {i18n.t("customer_support")}
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        ></View>
        {/* Contact AREA */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Contact")}
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
              <Ionicons name="md-contacts" size={30} color="#404040" />
              <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
                {i18n.t("contact")}
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

        {/* Customer Service AREA */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CustomerService")}
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
              <AntDesign name="tool" size={30} color="#404040" />
              <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
                {i18n.t("customer_service")}
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
    marginTop: 24,
    backgroundColor: "#e6e6e6"
  }
});
export default connect(mapStateToProps)(CustomerSupport);
