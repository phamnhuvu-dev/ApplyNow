"use strict";

import React, {Component} from "react";
import {FlatList, Image, Text, View} from "react-native";

import SearchBar from "../../../components/search-bar";
import Avatar from "../../../components/avatar";
import Header from "../../../components/header";
import Icon from "../../../components/icon";
import CreateChatGroupDialog from "../../../components/dialog/create-chat-group-dialog";

export default class MessagesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCreateChatGroupOpened: false
    };
  }

  _showCreateChatGroupOpened = () => {
    this.setState({
      isCreateChatGroupOpened: !this.state.isCreateChatGroupOpened
    });
  };


  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          onPressRightChild={this._showCreateChatGroupOpened}
          childRight={<Icon source={require("../../../statics/icon/ic_add_comment.png")}/>}>
          <SearchBar onChangeText={this._changeText}/>
        </Header>
        <FlatList
          style={{paddingHorizontal: 24}}
          data={[{key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}, {key: "a"}, {key: "b"}, {key: "a"}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        {this.state.isCreateChatGroupOpened ? <CreateChatGroupDialog onPressOut={this._showCreateChatGroupOpened}/> : null}
      </View>
    );
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = (item, index) => {
    return (
      <View style={{flexDirection: "row", marginBottom: 16, alignItems: "center"}}>
        <Avatar source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
        <View style={{flex: 1, marginLeft: 8}}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text
              numberOfLines={1}
              style={{flex: 1}}>
              Name Name Name Name Name
            </Text>
            <Text
              numberOfLines={1}
              style={{alignSelf: "flex-end"}}>
              Time
            </Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text numberOfLines={1} style={{flex: 1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pellentesque lacus eleifend elit luctus blandit.</Text>
            <Image
              fadeDuration={0}
              style={{
                alignSelf: "flex-end",
                height: 20,
                width: 20,
                resizeMode: "center",
                tintColor: "#070707",
              }}
              source={require("../../../statics/icon/ic_ok_outline.png")}
            />
          </View>
        </View>
      </View>
    );
  };
}