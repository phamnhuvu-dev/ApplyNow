import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import {main, whiteBlur50} from "../../res/colors";
import WhiteTextInput from "../../components/white-textinput";
import {BlueButton, WhiteButton} from "../../components/button";
import {AxiosInstance as axios} from "axios";

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _email = (text) => this.state.email = text;
  _password = (text) => this.state.password = text;

  _goMain = () => this.props.navigation.replace("Main");
  _goSignUp = () => this.props.navigation.navigate("SignUp");
  _goForgotPassword = () => this.props.navigation.navigate("ForgotPassword");

  _login = () => {
    axios.post('10.0.2.2:3000/api/', {
      firstName: this.state.email,
      lastName: this.state.password,
    })
      .then(response => {
        console.log(response);
        this._goMain();
      })
      .catch((error) => {
        console.log(error);
      });

  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: main, justifyContent: "center"}}>
        <View style={{backgroundColor: whiteBlur50, borderRadius: 5, margin: 20, padding: 36}}>
          <WhiteTextInput
            placeholder="Email"
            onChangeText={this._email}
          />
          <WhiteTextInput
            placeholder="Password"
            secure
            onChangeText={this._password}
            onSubmitEditing={this._login}
          />

          <WhiteButton onPress={this._login} style={{marginTop: 20}} title="LOG IN"/>
          <BlueButton onPress={this._goSignUp} style={{marginTop: 8}} title="SIGN UP"/>
          <TouchableOpacity onPress={this._goForgotPassword}>
            <Text style={{
              marginTop: 8,
              color: "white",
              fontWeight: "bold",
              alignSelf: "center",
              textDecorationLine: "underline"
            }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}