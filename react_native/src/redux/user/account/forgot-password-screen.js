import React, {Component} from "react";
import {View, Text} from "react-native";
import {mainColor, whiteBlur50Color} from "../../../res/colors";
import WhiteTextInput from "../../../components/white-text-input";
import {WhiteButton} from "../../../components/button";

export default class ForgotPasswordScreen extends Component {

  render() {
    return(
      <View style={{flex: 1, backgroundColor: mainColor, justifyContent: "center"}}>
        <View style={{backgroundColor: whiteBlur50Color, borderRadius: 5, margin: 20, padding: 36}}>
          <Text style={{color: 'white'}}>Enter your email to get new password</Text>
          <WhiteTextInput
            placeholder="Email"
          />
          <WhiteButton style={{marginTop: 20}} title="SEND"/>
        </View>
      </View>
    )
  }

}