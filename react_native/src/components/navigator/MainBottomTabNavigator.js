import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "../../features/home/HomeScreen";
import MessagesScreen from "../../features/message/list/MessagesScreen";
import BoardScreen from "../../features/board/BoardScreen";
import NotificationScreen from "../../features/notification/NotificationScreen";
import InfoScreen from "../../features/information/InfoScreen";
import {Image} from "react-native";
import React from "react";

const _itemTabBar = (source, tintColor) => (
  <Image
    source={source}
    style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: "stretch"}]}
  />
);

const MainBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("../../statics/icon/ic_home.png"), tintColor)
      }
    },
    Message: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("../../statics/icon/ic_message.png"), tintColor)
      }
    },
    Board: {
      screen: BoardScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("../../statics/icon/ic_board.png"), tintColor)
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("../../statics/icon/ic_notifications.png"), tintColor)
      }
    },

    Information: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("../../statics/icon/ic_person.png"), tintColor)
      }
    }
  },
  {
    barStyle: {
      backgroundColor: "#F06767",
    },
    activeTintColor: "white",
    inactiveTintColor: "white"
  }
);

export default MainBottomTabNavigator