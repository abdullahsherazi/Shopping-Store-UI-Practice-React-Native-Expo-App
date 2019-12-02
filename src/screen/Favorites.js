import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class Favorites extends React.Component {
  render() {
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
        </View>

        {/* Center favorites area     */}
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <View
            style={{
              width: "80%",
              height: 150,
              borderColor: "black",
              borderWidth: 0.5,
              backgroundColor: "#e6e6e6",
              justifyContent: "center",
              alignItems: "center",
              borderStyle: "dashed",
              borderRadius: 1
            }}
          >
            <AntDesign name="hearto" size={30} color="#404040" />
            <Text>{i18n.t("favorites_page_content")}</Text>
          </View>
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
export default connect(mapStateToProps)(Favorites);
