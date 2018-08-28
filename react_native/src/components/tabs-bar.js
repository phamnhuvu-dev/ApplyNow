import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default class TabsBar extends Component {

  render() {
    return (
      <View style={{flexDirection: 'row', borderWidth: 0.5, height: 40}}>
        <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Offer</Text>
        </View>
        <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Apply</Text>
        </View>
      </View>
    )
  }
}