import React, {Component} from "react";
import {Image, TextInput, View, Platform} from "react-native";

export default class BoardScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  _changeText = (text) => {
    this.setState({
      text: text
    })
  };

  render() {
    let marginLeft = Platform.OS === "ios"? 8: 0;
    return (
      <View style={[
        {
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#9c9c9c',
          flexDirection: 'row',
          borderRadius: 5
        },
        this.props.style
      ]}>
        <TextInput
          style={{
            marginLeft: marginLeft,
            flex: 0.9,
            height: 40
          }}
          placeholder={"Search..."}
          onChangeText={this._changeText}
        />

        <Image
          fadeDuration={0}
          style={{
            height: 40,
            resizeMode: 'center',
            flex: 0.1, tintColor: '#070707',
          }}
          source={require('../res/icon/ic_search.png')}
        />
        {/*<Text>{this.state.text}</Text>*/}
      </View>
    )
  }
}