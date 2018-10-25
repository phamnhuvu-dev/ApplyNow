"use strict";

import React, {Component} from "react";
import {Text, Image, View, Button} from "react-native";
import {AppContext} from "../../App";
import User from "../../data/models/user";
import {I18n_email, I18n_full_name, I18n_phone} from '../../statics/i18n/i18n';

export default class InfoScreen extends Component {

  _openCamera = () => {
    this.props.navigation.navigate('Camera')
  };

  render() {
    return (
      <AppContext.Consumer>
        {({user}) => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 100, height: 100, borderRadius: 5}}
                source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}
              />
              <View>
                <Text>{`${I18n_full_name} ${user.name}`}</Text>
                <Text>{`${I18n_email} ${user.email}`}</Text>
                <Text>{`${I18n_phone} ${user.phone}`}</Text>
                <Text>{`Mô tả: ${user.description}`}</Text>
              </View>
            </View>
            <Button onPress={() => {
            }} title={"Edit"}/>
            <Button onPress={this._openCamera} title="Camera"/>
          </View>
        )}
      </AppContext.Consumer>
    );
  }
}