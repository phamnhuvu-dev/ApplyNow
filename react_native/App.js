"use strict";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage, Image, StatusBar, View} from 'react-native';
import {createStackNavigator, SafeAreaView} from "react-navigation";
import LoginScreen from "./src/features/account/login-screen";
import SignUpScreen from "./src/features/account/signup-screen";
import ForgotPasswordScreen from "./src/features/account/forgot-password-screen";
import CameraScreen from "./src/screens/camera-screen";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./src/features/home/home-screen";
import MessageScreen from "./src/features/message/message-screen";
import BoardScreen from "./src/features/board/board-screen";
import NotificationScreen from "./src/features/notification/notification-screen";
import InfoScreen from "./src/features/information/info-screen";
import {mainColor} from "./src/res/colors";
import User from "./src/models/user";

export const AppContext = React.createContext();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: false,
      login: false,
      user: new User(
        1,
        "Phạm Như Vũ",
        "phamnhuvu.ou@gmail.com",
        "01282027040",
        "Mobile developer"
      ),
    };
  }

  componentDidMount() {
    this._retrieveData().then(result => {
      console.log(result);
      this.setState({check: true, login: result})
    });
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("login");
      return value === "1";
    } catch (error) {
      return error;
    }
  };

  _rootStack = (login) => createStackNavigator(
    {
      Login: LoginScreen,
      SignUp: SignUpScreen,
      ForgotPassword: ForgotPasswordScreen,
      Camera: CameraScreen,
      Main: Bottom,
    },
    {
      initialRouteName: login ? "Main" : "Login",
      headerMode: "none",
      cardStyle: {shadowColor: "transparent"},
    }
  );


  render() {
    let RootStack;
    if (this.state.check) {
      RootStack = this._rootStack(this.state.login)
    }
    let content = this.state.check ? (
      <View style={{flex: 1, backgroundColor: mainColor}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#F06767"
        />
        <SafeAreaView style={{flex: 1}} forceInset={{bottom: "never"}}>
          <RootStack/>
        </SafeAreaView>
      </View>
    ) : <View/>;

    return (
      <AppContext.Provider value={this.state}>
        {content}
      </AppContext.Provider>
    );
  }
}

const _itemTabBar = (source, tintColor) => (
  <Image
    source={source}
    style={[{width: 28, height: 28, tintColor: tintColor, resizeMode: "stretch"}]}
  />
);

const Bottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("./src/res/icon/ic_home.png"), tintColor)
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("./src/res/icon/ic_message.png"), tintColor)
      }
    },
    Board: {
      screen: BoardScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("./src/res/icon/ic_board.png"), tintColor)
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("./src/res/icon/ic_notifications.png"), tintColor)
      }
    },

    Information: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => _itemTabBar(require("./src/res/icon/ic_person.png"), tintColor)
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
