"use strict";

import React, {Component} from "react";
import {FlatList, Text, View, Platform, Image} from "react-native";
import SearchBar from "../../components/search-bar";
import Avatar from "../../components/avatar";
import Header from "../../components/header";
import Icon from "../../components/icon";
import CreatePostDialog from "../../components/dialog/create-post-dialog";

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      search: "",
      timeout: null,
      isCreatePostDialogOpened: false
    };
  }

  _showDialog = () => {
    this.setState({
      isCreatePostDialogOpened: !this.state.isCreatePostDialogOpened
    });
  };

  _changeText = (value) => {
    clearTimeout(this.state.timeout);
    this.state.timeout = setTimeout(() => {
      this.state.search = value;
      console.log(this.state.search);
    }, 350);
  };

  _renderItem = ({item, index}) => {
    return (
      <View
        style={{borderColor: "#070707", marginBottom: 16, paddingHorizontal: 24, marginTop: index === 0 ? 16 : 0}}>
        <Text>Job Title</Text>
        <View style={{flexDirection: "row"}}>
          <Avatar source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
          <View style={{justifyContent: "center", marginLeft: 8}}>
            <Text>Name</Text>
            <Text>Description</Text>
          </View>
        </View>
        <Text style={{textAlign: "justify"}}>
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

        <Header
          onPressRightChild={this._showDialog}
          childRight={<Icon source={require("../../res/icon/ic_note_add.png")}/>}>
          <SearchBar
            onChangeText={this._changeText}
          />
        </Header>
        <FlatList
          data={[{key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        {this.state.isCreatePostDialogOpened ? <CreatePostDialog onPressOut={this._showDialog}/> : null}
      </View>
    );
  }
}