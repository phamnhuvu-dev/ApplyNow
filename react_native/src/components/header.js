import React, {Component} from "react";
import {View, TouchableOpacity} from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={{
        height: 56,
        backgroundColor: "#F06767",
        flexDirection: "row",
        paddingHorizontal: 24,
        alignItems: "center"
      }}>
        {this.props.childLeft}
        <View style={{
          flex: 1,
          marginHorizontal: 24
        }}>
          {this.props.children}
        </View>
        <TouchableOpacity onPress={this.props.onPressRightChild}>
          {this.props.childRight}
        </TouchableOpacity>
      </View>
    );
  }
}