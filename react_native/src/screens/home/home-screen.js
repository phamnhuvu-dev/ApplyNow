import React, {Component} from "react";
import {FlatList, Text, View, Platform} from "react-native";
import SearchBar from "../../components/search-bar";
import Avatar from "../../components/avatar";
import Header from "../../components/header";

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      search: "",
      timeout: null
    }
  }

  _changeText = (value) => {
    clearTimeout(this.state.timeout);
    this.state.timeout = setTimeout(() => {
      this.state.search = value;
      console.log(this.state.search);
    }, 350);
  };

  _renderItem = (item, index) => {
    return (
      <View
        style={{borderColor: "#070707", marginBottom: 16, paddingHorizontal: 24, paddingVertical: 16}}>
        <Text>Job Title</Text>
        <View style={{flexDirection: "row"}}>
          <Avatar source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
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
      <View style={{flex: 1}}>
        <Header>
          <SearchBar
            onChangeText={this._changeText}
            style={{
              marginHorizontal: 24,
              marginVertical: 16
            }}
          />
        </Header>
        <FlatList
          data={[{key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}