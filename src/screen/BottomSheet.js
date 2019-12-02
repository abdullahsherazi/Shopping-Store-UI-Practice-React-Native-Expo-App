import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import i18n from "i18n-js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  Language: state.Lang
});

class BottomStyleSheet extends React.Component {
  render() {
    this.props.Language === "en" ? (i18n.locale = "en") : (i18n.locale = "ar");
    return (
      <BottomSheet
        //setting the visibility state of the bottom shee
        visible={this.props.visible}
        //Toggling the visibility state on the click of the back botton
        onBackButtonPress={this.props._toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
        onBackdropPress={this.props._toggleBottomNavigationView}
      >
        {/*Bottom Sheet inner View*/}
        <View style={styles.bottomNavigationView}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* Here is is being checked that if this view is seleted then give it this backgroundColor */}
            <View
              style={[
                this.props.ListView === 1
                  ? styles.SelectedView
                  : styles.UnSelectedView
              ]}
            >
              <Feather
                name="list"
                size={50}
                color="black"
                onPress={() => {
                  this.props.ListViewFunc(),
                    this.props._toggleBottomNavigationView();
                }}
              />
              <Text style={{ fontWeight: "bold" }}>{i18n.t("list_view")}</Text>
            </View>

            <View
              style={[
                this.props.LargeCardView === 1
                  ? styles.SelectedView
                  : styles.UnSelectedView
              ]}
            >
              <Feather
                name="credit-card"
                size={50}
                color="black"
                style={{ marginTop: 5 }}
                onPress={() => {
                  this.props.LargeCardViewFunc(),
                    this.props._toggleBottomNavigationView();
                }}
              />
              <Text style={{ fontWeight: "bold" }}>{i18n.t("card_view")}</Text>
            </View>

            <View
              style={[
                this.props.SmallCardView === 1
                  ? styles.SelectedView
                  : styles.UnSelectedView
              ]}
            >
              <FontAwesome
                name="square-o"
                size={50}
                color="black"
                style={{ marginTop: 5 }}
                onPress={() => {
                  this.props.SmallCardViewFunc(),
                    this.props._toggleBottomNavigationView();
                }}
              />
              <Text style={{ fontWeight: "bold" }}>
                {i18n.t("small_card_view")}
              </Text>
            </View>
          </View>
        </View>
      </BottomSheet>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigationView: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: "white",
    width: "90%",
    height: 250
  },
  SelectedView: {
    borderRadius: 10,
    width: 120,
    backgroundColor: "#00695c",
    justifyContent: "center",
    alignItems: "center"
  },
  UnSelectedView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default connect(mapStateToProps)(BottomStyleSheet);
