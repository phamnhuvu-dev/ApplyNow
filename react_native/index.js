/** @format */

import {AppRegistry, Image, AsyncStorage} from "react-native";
// import App from './App';
import {name as appName} from "./app.json";
import {createStackNavigator, SafeAreaView} from "react-navigation";
import MainScreen from "./src/screens/main-screen";
import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from "react-native";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./src/redux/home/home-screen";
import MessageScreen from "./src/redux/message/message-screen";
import BoardScreen from "./src/redux/board/board-screen";
import NotificationScreen from "./src/redux/notification/notification-screen";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import LoginScreen from "./src/redux/user/account/login-screen";
import {mainColor} from "./src/res/colors";
import SignUpScreen from "./src/redux/user/account/signup-screen";
import ForgotPasswordScreen from "./src/redux/user/account/forgot-password-screen";
import InfoScreen from "./src/redux/information/info-screen";
import CameraScreen from "./src/screens/camera-screen";


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

    Information: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={require("./src/res/icon/ic_person.png")}
            style={[ {width: 28, height: 28, tintColor: tintColor, resizeMode: 'stretch'}]}
          />
        )
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: false,
      login: false,
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
      Login: {
        screen: LoginScreen,
      },
      SignUp: {
        screen: SignUpScreen,
      },
      ForgotPassword: {
        screen: ForgotPasswordScreen,
      },
      Camera: {
        screen: CameraScreen
      },
      Main: {
        screen: Bottom,
      },
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
    return this.state.check ? (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: mainColor}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#F06767"
          />
          <SafeAreaView style={{flex: 1}} forceInset={{bottom: "never"}}>
            <RootStack/>
          </SafeAreaView>
        </View>
      </Provider>
    ) : <View/>;
  }
}

//
// const App = () => (
//
// );

AppRegistry.registerComponent(appName, () => App);
