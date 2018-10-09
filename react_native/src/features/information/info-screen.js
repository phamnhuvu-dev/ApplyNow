import React, {Component} from "react";
import {Text, Image, View, Button} from "react-native";
import {AppContext} from "../../../App";
import User from "../../models/user";


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
                <Text>{`Họ và tên: ${user.name}`}</Text>
                <Text>{`Email: ${user.email}`}</Text>
                <Text>{`Số điện thoại: ${user.phone}`}</Text>
                <Text>{`Mô tả: ${user.desc}`}</Text>
              </View>
            </View>
            <Button onPress={} title={"Edit"}/>
            <Button onPress={this._openCamera} title="Camera"/>
          </View>
        )}
      </AppContext.Consumer>
    );
  }
}