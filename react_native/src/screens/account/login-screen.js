import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import {main, whiteBlur50} from "../../res/colors";
import WhiteTextInput from "../../components/white-textinput";
import {BlueButton, WhiteButton} from "../../components/button";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: main, justifyContent: "center"}}>
        <View style={{backgroundColor: whiteBlur50, borderRadius: 5, margin: 20, padding: 36}}>
          <WhiteTextInput
            placeholder="Email"
          />
          <WhiteTextInput
            placeholder="Password"
            secure
          />

          <WhiteButton onPress={() => this.props.navigation.replace("Main")}style={{marginTop: 20}} title="LOG IN"/>
          <BlueButton onPress={() => this.props.navigation.navigate("SignUp")} style={{marginTop: 8}} title="SIGN UP"/>
          <TouchableOpacity onPress={
            () => this.props.navigation.navigate("ForgotPassword")
          }>
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