import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import HomeScreen from "./home-screen";
import MessageScreen from "./message-screen";
import BoardScreen from "./board/board-screen";
import NotificationScreen from "./notification-screen";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require('../assets/icon/ic_home.png')}
            style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
          />
        )
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require('../assets/icon/ic_message.png')}
            style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
          />
        )
      }
    },
    Board: {
      screen: BoardScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require('../assets/icon/ic_board.png')}
            style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
          />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
              source={require('../assets/icon/ic_notifications.png')}
              style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
            />
        )
      }
    },
    // Message: MessageScreen,
    // Board: BoardScreen,
    // Notification: NotificationScreen
  }, {
    barStyle: {
      backgroundColor: '#F06767',
    },

    activeTintColor: 'white'
  }
);


export default class MainScreen extends Component {
  render() {
    return (
      <Bottom/>
    )
  }
}