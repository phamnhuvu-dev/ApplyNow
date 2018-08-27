import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import Avatar from "../../components/avatar";

export default class NotificationScreen extends Component {
  render() {
    return (
      <View>
        <FlatList
          style={{paddingHorizontal: 24}}
          data={[{key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = (item, index) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <Avatar source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              numberOfLines={1}
              style={{flex: 0.75}}>
              Name Name Name Name Name Name Name Name Name Name
            </Text>
            <Text
              numberOfLines={1}
              style={{alignSelf: 'flex-end'}}>
              Time
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text numberOfLines={1} style={{flex: 0.8}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pellentesque lacus eleifend elit luctus blandit.</Text>
            <Image
              fadeDuration={0}
              style={{
                alignSelf: 'flex-end',
                height: 20,
                width: 20,
                resizeMode: 'center',
                tintColor: '#070707',
              }}
              source={require('../../res/icon/ic_ok_outline.png')}
            />
          </View>
        </View>
      </View>
    );
  };
}