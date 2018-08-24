/** @format */

import {AppRegistry, Image} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator} from "react-navigation";
import MainScreen from "./src/screens/main-screen";
import React from "react";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./src/screens/home-screen";
import MessageScreen from "./src/screens/message-screen";
import BoardScreen from "./src/screens/board/board-screen";
import NotificationScreen from "./src/screens/notification-screen";

const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require('./src/assets/icon/ic_home.png')}
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
            source={require('./src/assets/icon/ic_message.png')}
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
            source={require('./src/assets/icon/ic_board.png')}
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
            source={require('./src/assets/icon/ic_notifications.png')}
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

const RootStack = createStackNavigator(
  {
    Main: {screen: Bottom, navigationOptions: {header: null}}
  },
  {
    initialRouteName: 'Main'
  }
);

const App = () => (
  <Bottom/>
);

AppRegistry.registerComponent(appName, () => App);
