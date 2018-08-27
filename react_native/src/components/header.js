import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#F06767',}}>
        {this.props.children}
      </View>
    )
    // if (Platform.OS === 'ios' || this.props.children != null) {
    //   <View style={{backgroundColor: '#F06767',}}>
    //   </View>
    // } else {
    //   return (
    //     <View style={{backgroundColor: '#F06767',}}>
    //       {this.props.children}
    //     </View>
    //   )
    // }
  }
}