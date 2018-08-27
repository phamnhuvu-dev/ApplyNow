import React, {Component} from "react";
import {Image, TextInput, View} from "react-native";
import {whiteBlur99} from "../res/colors";

export default class WhiteTextInput extends Component {

  render() {
    return (
      <TextInput
        style={{
          borderColor: "white",
          borderBottomWidth: 1,
          color: "white",
        }}
        placeholder={this.props.placeholder}
        placeholderTextColor={whiteBlur99}
        secureTextEntry={!!this.props.secure}
      />
    );
  }
}