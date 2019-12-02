import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class ForgetPassword extends React.Component {
  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");
    return (
      <View style={styles.container}>
        {/* Whole SignIn Area #first container */}
        <View style={styles.container1}>
          <View style={{ paddingBottom: 30, alignItems: "center" }}>
            <Text
              style={{ fontSize: 20, color: "#8c8c8c", textAlign: "center" }}
            >
              {i18n.t("forget_password_page_line")}
            </Text>
          </View>

          {/* hr line */}
          <View style={styles.hr} />

          {/* Email Area */}
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="black"
              style={{ paddingTop: 15 }}
            />
            <TextInput placeholder={i18n.t("email")} style={styles.Input} />
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.Reset}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {i18n.t("reset_password")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 2nd Container */}

        {/* LINE */}
        <View style={styles.container2}>
          <View
            style={{ width: "100%", borderColor: "black", borderWidth: 0.4 }}
          ></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 30
  },

  container1: {
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  container2: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#d9d9d9"
  },

  Input: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    width: "90%"
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  Reset: {
    backgroundColor: "#cca300",
    width: "100%",
    marginTop: 20,
    height: 50,
    paddingTop: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});
export default connect(mapStateToProps)(ForgetPassword);
