import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import SearchBar from "../components/search-bar";
import Avatar from "../components/avatar";

export default class HomeScreen extends Component {

  _renderItem = (item, index) => {
    return (
      <View
        style={{borderColor: '#070707', borderWidth: 1, marginBottom: 16, paddingHorizontal: 24, paddingVertical: 16}}>
        <Text>Job Title</Text>
        <View style={{flexDirection: 'row'}}>
          <Avatar source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
          <View>
            <Text>Name</Text>
            <Text>Description</Text>
          </View>
        </View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum pellentesque lacus eleifend elit luctus blandit.
          Fusce auctor, massa a blandit accumsan, dolor mi
          pharetra libero, et consectetur est enim sit amet odio.
        </Text>
      </View>
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={{marginBottom: 58}}>
        <SearchBar style={{marginHorizontal: 24, marginVertical: 16}}/>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}