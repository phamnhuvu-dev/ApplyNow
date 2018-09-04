import React, {Component} from "react";
import {Image} from "react-native";
import HomeScreen from "./home/home-screen";
import MessageScreen from "./message/message-screen";
import BoardScreen from "./board/board-screen";
import NotificationScreen from "./notification/notification-screen";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import InfoScreen from "./info/info-screen";

const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require('../res/icon/ic_home.png')}
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
            source={require('../res/icon/ic_message.png')}
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
            source={require('../res/icon/ic_board.png')}
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
              source={require('../res/icon/ic_notifications.png')}
              style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
            />
        )
      }
    },

    Information: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require('../res/icon/ic_person.png')}
            style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
          />
        )
      }
    }
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