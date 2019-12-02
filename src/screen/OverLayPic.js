import React from "react";
import { Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Overlay } from "react-native-elements";

export default class OverlayPic extends React.Component {
  render() {
    return (
      <Overlay
        isVisible={this.props.visible}
        //Toggling the visibility state on the click of the back botton
        onBackButtonPress={this.props._toggleOverLay}
        //Toggling the visibility state on the clicking out side of the sheet
        onBackdropPress={this.props._toggleOverLay}
        overlayBackgroundColor="white"
        width="90%"
        height="70%"
      >
        {/* Cross Icon */}
        <Entypo
          name="circle-with-cross"
          size={30}
          color="#404040"
          onPress={() => this.props._toggleOverLay()}
        />

        {/* Pic of cloth */}
        <View style={{ flex: 1 }}>
          <Image
            source={this.props.ItemPhoto}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </Overlay>
    );
  }
}
