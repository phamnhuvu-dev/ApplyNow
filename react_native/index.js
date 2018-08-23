/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator} from "react-navigation";
import MainScreen from "./src/screens/main-screen";
import React from "react";

const RootStack = createStackNavigator(
  {
    Main: {screen: MainScreen, navigationOptions: {header: null}}
  },
  {
    initialRouteName: 'Main'
  }
);

const App = () => (
  <RootStack/>
);

AppRegistry.registerComponent(appName, () => App);
