import React, {Component} from "react";
import {AsyncStorage, Text, TouchableOpacity, View} from "react-native";
import {main, whiteBlur50} from "../../../res/colors";
import WhiteTextInput from "../../../components/white-text-input";
import {BlueButton, WhiteButton} from "../../../components/button";
import {login} from "../../../modules/user-api";
import {connect} from "react-redux";
import {syncUser} from "../user-actions";


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  _email = (text) => this.state.email = text;
  _password = (text) => this.state.password = text;

  _goMain = () => this.props.navigation.replace("Main");
  _goSignUp = () => this.props.navigation.navigate("SignUp");
  _goForgotPassword = () => this.props.navigation.navigate("ForgotPassword");

  _login = () => {
    login(this.state.email, this.state.password)
      .then(response => {
        if (response.data.login === "success") {
          this._storeData(response.data)
            .then(this._goMain)
            .catch(error => {
              console.log(error);
            });
          this.props.dispatch(syncUser(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  _storeData = async (user) => {
    await AsyncStorage.setItem("login", "1");
    await AsyncStorage.setItem("user", JSON.stringify(user));
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

export default connect()(LoginScreen)