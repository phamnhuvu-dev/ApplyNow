import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";
import {main, blue} from "../res/colors";

const white_style = {
  touchable: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },

  title: {
    fontWeight: "bold",
    color: main,
  }
};

const blue_style = {
  touchable: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: blue,
    borderRadius: 5,
  },

  title: {
    fontWeight: "bold",
    color: 'white',
  }
};

export class Button extends Component {

  render() {
    return (
      <TouchableOpacity>
        <Text style={[{height: 40}, this.props.style]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export class WhiteButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[white_style.touchable, this.props.style]}>
        <Text
          style={white_style.title}
        >{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export class BlueButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[blue_style.touchable, this.props.style]}>
        <Text
          style={blue_style.title}
        >{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

