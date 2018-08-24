import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default class Avatar extends Component {

  render() {
    return (
      <Image
        style={{width: 50, height: 50, borderRadius: 5, marginRight: 8}}
        source={this.props.source}
      />
    )
  }
}