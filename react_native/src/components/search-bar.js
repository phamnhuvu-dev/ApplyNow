import React, {Component} from "react";
import {Image, TextInput, View, Platform} from "react-native";
import Icon from "./icon";

export default class SearchBar extends Component {

  render() {
    return (
      <View style={[
        {
          borderWidth: 1,
          borderColor: 'white',
          flexDirection: 'row',
          borderRadius: 5
        },
        this.props.style
      ]}>
        <TextInput
          style={{
            padding: 0,
            marginLeft: 8,
            flex: 1,
            height: 30,
            color: 'white'
          }}
          selectionColor={'white'}
          placeholder={"Search..."}
          placeholderTextColor={'white'}
          onChangeText={this.props.onChangeText}
        />
        <Icon source={require('../res/icon/ic_search.png')}/>
      </View>
    )
  }
}