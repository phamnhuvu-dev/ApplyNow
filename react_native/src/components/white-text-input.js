import React, {Component} from "react";
import {TextInput, Platform, View} from "react-native";
import {whiteBlur99Color} from "../res/colors";

export default class WhiteTextInput extends Component {

  render() {
    return (
      <TextInput
        style={{
          paddingHorizontal: 0,
          paddingVertical: Platform.OS === "ios" ? 4 : 0,
          margin: 0,
          color: "white",
          fontSize: 16,
          borderColor: "white",
          borderBottomWidth: 1,
        }}
        underlineColorAndroid='transparent'
        selectionColor={'white'}
        placeholder={this.props.placeholder}
        placeholderTextColor={whiteBlur99Color}
        secureTextEntry={!!this.props.secure}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}