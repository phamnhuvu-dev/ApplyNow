import React, {Component} from "react";
import {Image, View, Button} from "react-native";


export default class InfoScreen extends Component {

  _openCamera = () => {
    this.props.navigation.navigate('Camera')
  };

  render() {
    return (
      <View>
        <Button onPress={this._openCamera} title="Camera"/>
      </View>
    );
  }
}