"use strict";

import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import Avatar from "../../components/avatar";

export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{paddingHorizontal: 24}}
          data={[{key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 16, marginTop: index === 0 ? 16: 0}}>
        <Avatar source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 8}}>
          <Text
            numberOfLines={1}>
            Name Name Nam
          </Text>
          <Text numberOfLines={1} >Lorem ipsum dolo</Text>
        </View>
        <Avatar source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
      </View>
    );
  };
}