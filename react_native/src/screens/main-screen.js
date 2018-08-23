import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "./home-screen";
import MessageScreen from "./message-screen";
import BoardScreen from "./board-screen";
import NotificationScreen from "./notification-screen";

const Bottom = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Message: MessageScreen,
    Board: BoardScreen,
    Notification: NotificationScreen
  }
);


export default class MainScreen extends Component {
  render() {
    return (
      <Bottom></Bottom>
    )
  }
}