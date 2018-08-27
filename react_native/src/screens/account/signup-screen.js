import React, {Component} from "react";
import {View} from "react-native";
import {main, whiteBlur50} from "../../res/colors";
import WhiteTextInput from "../../components/white-textinput";
import {WhiteButton} from "../../components/button";

export default class SignUpScreen extends Component {

  render() {
    return(
      <View style={{flex: 1, backgroundColor: main, justifyContent: "center"}}>
        <View style={{backgroundColor: whiteBlur50, borderRadius: 5, margin: 20, padding: 36}}>
          <WhiteTextInput
            placeholder="Name"
          />
          <WhiteTextInput
            placeholder="Email"
          />
          <WhiteTextInput
            placeholder="Password"
            secure
          />
          <WhiteTextInput
            placeholder="Confirm password"
            secure
          />

          <WhiteButton style={{marginTop: 20}} title="SIGN UP"/>
        </View>
      </View>
    )
  }

}