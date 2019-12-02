import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class SignIn extends React.Component {
  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: "#d9d9d9",
            width: "100%",
            height: 60,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "normal", color: "#666666" }}
          >
            {i18n.t("sign_in")}
          </Text>
        </View>

        {/* Whole SignIn Area #first container */}
        <View style={styles.container1}>
          {/* Email Area */}
          <View style={{ flexDirection: "row", paddingBottom: 15 }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="black"
              style={{ paddingTop: 15 }}
            />
            <TextInput placeholder={i18n.t("email")} style={styles.Input} />
          </View>
          {/* hr line */}
          <View style={styles.hr} />
          {/* Password Area */}
          <View style={{ flexDirection: "row", paddingTop: 15 }}>
            <AntDesign
              name="lock"
              size={20}
              color="black"
              style={{ paddingTop: 15 }}
            />
            <TextInput
              placeholder={i18n.t("password")}
              secureTextEntry={true}
              style={styles.Input}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DrawerNavigator")}
            style={styles.signIn}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {" "}
              {i18n.t("sign_in")}{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ForgetPassword")}
          >
            <Text
              style={{ textAlign: "center", marginTop: 10, color: "#cca300" }}
            >
              {i18n.t("forget_password")}
            </Text>
          </TouchableOpacity>
        </View>
        {/* 2nd Container */}

        <View style={styles.container2}>
          <View
            style={{ width: "100%", borderColor: "black", borderWidth: 0.4 }}
          ></View>

          <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 10 }}>
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              {i18n.t("sign_in_social")}
            </Text>
          </View>
          {/* facebook twitter icon */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <FontAwesome
                name="facebook-square"
                size={100}
                color="#003399"
                style={{ paddingTop: 15 }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome
                name="twitter-square"
                size={100}
                color="#4d88ff"
                style={{ paddingTop: 15 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 20 }}>
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              {i18n.t("not_a_member")}
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text
                style={{ fontSize: 15, textAlign: "center", color: "#cca300" }}
              >
                {i18n.t("sign_up")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 24
  },

  container1: {
    flex: 0.5,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  container2: {
    flex: 0.5,
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
  signIn: {
    backgroundColor: "#cca300",
    width: "100%",
    marginTop: 20,
    height: 50,
    paddingTop: 10,
    borderRadius: 5
  }
});
