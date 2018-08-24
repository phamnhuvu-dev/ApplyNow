import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

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
    return (
      <View style={[
        {
          borderWidth: 1,
          borderColor: '#9c9c9c',
          flexDirection: 'row',
          borderRadius: 5
        },
        this.props.style
      ]}>
        <TextInput
          style={{
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
          source={require('../assets/icon/ic_search.png')}
        />
        {/*<Text>{this.state.text}</Text>*/}
      </View>
    )
  }
}