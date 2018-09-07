import React, {Component} from "react";
import {View, TextInput, Text, Touchable, TouchableWithoutFeedback} from "react-native";
import Dialog from "./dialog";
import {Button} from "../button";


export default class CreatePostDialog extends Component {

  render() {
    return (
      <Dialog onPress={this.props.onPressOut}>
        <View style={{backgroundColor: 'white', borderRadius: 5, padding: 20}}>
          <Text>Create Post</Text>
          <TextInput/>
          <TextInput/>
          <View style={{flexDirection: "row"}}>
            <Button title={"Cancel"}/>
            <Button title={"OK"}/>
          </View>
        </View>
      </Dialog>
    );
  }
}