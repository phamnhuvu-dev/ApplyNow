"use strict";

import React, {Component} from "react";
import {View} from "react-native";
import {mainColor, whiteBlur50Color} from "../../../res/colors";
import WhiteTextInput from "../../../components/white-text-input";
import {WhiteButton} from "../../../components/button";

export default class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  _name = (name) => this.state.name = name;
  _email = (email) => this.state.email = email;
  _password = (password) => this.state.password = password;
  _confirm_password = (password) => this.state.confirm_password = password;

  _register = () => {
    if (this.state.name.length === 0) {

    }

    if (this.state.email.length === 0) {

    }

    let password = this.state.password;
    let confirm_password = this.state.confirm_password;
    if (password !== confirm_password) {

    } else if (password.length <= 6) {

    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: mainColor, justifyContent: "center"}}>
        <View style={{backgroundColor: whiteBlur50Color, borderRadius: 5, margin: 20, padding: 36}}>
          <WhiteTextInput
            placeholder="Name"
            onChangeText={this._name}
          />
          <WhiteTextInput
            placeholder="Email"
            onChangeText={this._email}
          />
          <WhiteTextInput
            placeholder="Password"
            secure
            onChangeText={this._password}
          />
          <WhiteTextInput
            placeholder="Confirm password"
            secure
            onChangeText={this._confirm_password}
          />
          <WhiteButton onPress={this._register} style={{marginTop: 20}} title="SIGN UP"/>
        </View>
      </View>
    );
  }
}