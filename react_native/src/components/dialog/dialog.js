import React, {Component} from "react";
import {View, Touchable, TouchableWithoutFeedback} from "react-native";

export default class Dialog extends Component {

  render() {
    return (
      <Touchable
        onPress={}
        style={{
          position: "absolute",

        }}
      >
        <TouchableWithoutFeedback>
          {this.props.children}
        </TouchableWithoutFeedback>
      </Touchable>
    );
  }
}