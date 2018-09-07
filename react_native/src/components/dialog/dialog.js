import React, {Component} from "react";
import {TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {blackBlur80Color} from "../../res/colors";

export default class Dialog extends Component {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          flex: 1,
          position: "absolute",
          backgroundColor: blackBlur80Color,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableWithoutFeedback>
          {this.props.children}
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    );
  }
}