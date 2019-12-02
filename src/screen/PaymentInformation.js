import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class PaymentInformation extends React.Component {
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
          <View style={{ width: "70%", alignItems: "center" }}>
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
                {i18n.t("payment_information")}
              </Text>
            </View>
          </View>
        </View>

        {/* CARDS */}
        <View
          style={{
            height: "20%",
            width: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FontAwesome
            name="cc-visa"
            size={70}
            color="black"
            style={{ marginRight: "20%" }}
          />
          <FontAwesome name="cc-paypal" size={70} color="black" />
        </View>

        {/* CARD DETAILS HEADING */}
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            {i18n.t("card_details")}
          </Text>
          <Text style={{ color: "#404040" }}>
            {i18n.t("enter_card_details")}
          </Text>
        </View>

        {/* CARD DETAILS AREA */}
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          {/* FirstName Area */}
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Ionicons
              name="ios-person"
              size={20}
              color="black"
              style={{ paddingTop: 15 }}
            />
            <TextInput placeholder={i18n.t("name")} style={styles.Input} />
          </View>
          {/* hr line */}
          <View style={styles.hr} />

          {/* Card No */}
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <Ionicons
              name="ios-card"
              size={20}
              color="black"
              style={{ paddingTop: 15 }}
            />
            <TextInput placeholder={i18n.t("card_no")} style={styles.Input} />
          </View>
          {/* hr line */}
          <View style={styles.hr} />

          {/* CODE */}
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <AntDesign
              name="lock"
              size={20}
              color="black"
              style={{ paddingTop: 15 }}
            />
            <TextInput
              placeholder={i18n.t("code")}
              secureTextEntry={true}
              style={styles.Input}
            />
          </View>
          {/* hr line */}
          <View style={styles.hr} />

          {/* BUTTON */}
          <TouchableOpacity style={styles.Signup}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {" "}
              {i18n.t("save_information")}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 24
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  Input: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    width: "90%"
  },
  Signup: {
    backgroundColor: "#404040",
    width: "100%",
    marginTop: 20,
    height: 50,
    paddingTop: 10,
    borderRadius: 5
  }
});
export default connect(mapStateToProps)(PaymentInformation);
