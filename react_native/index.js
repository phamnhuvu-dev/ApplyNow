/** @format */

import {AppRegistry, Image} from "react-native";
// import App from './App';
import {name as appName} from "./app.json";
import {createStackNavigator, SafeAreaView} from "react-navigation";
import MainScreen from "./src/screens/main-screen";
import React from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from "react-native";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./src/screens/home/home-screen";
import MessageScreen from "./src/screens/message/message-screen";
import BoardScreen from "./src/screens/board/board-screen";
import NotificationScreen from "./src/screens/notification/notification-screen";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import LoginScreen from "./src/screens/account/login-screen";
import {main} from './src/res/colors'
import SignUpScreen from "./src/screens/account/signup-screen";
import ForgotPasswordScreen from "./src/screens/account/forgot-password-screen";


const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require("./src/res/icon/ic_home.png")}
            style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: "stretch"}]}
          />
        )
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require("./src/res/icon/ic_message.png")}
            style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: "stretch"}]}
          />
        )
      }
    },
    Board: {
      screen: BoardScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require("./src/res/icon/ic_board.png")}
            style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: "stretch"}]}
          />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require("./src/res/icon/ic_notifications.png")}
            style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: "stretch"}]}
          />
        )
      }
    },
    // Message: MessageScreen,
    // Board: BoardScreen,
    // Notification: NotificationScreen
  }, {
    barStyle: {
      backgroundColor: "#F06767",
    },

    activeTintColor: "white"
  }
);

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: Bottom,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: "Login"
  }
);

const App = () => (
  <Provider store={store}>
    <View style={{flex: 1, backgroundColor: main}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor= "#F06767"
      />
      <SafeAreaView style={{flex: 1}} forceInset={{bottom: "never"}}>
        <RootStack/>
      </SafeAreaView>
    </View>
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
