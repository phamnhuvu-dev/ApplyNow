/** @format */

import {AppRegistry} from "react-native";
// import App from './App';
import {name as appName} from "./app.json";
import React from "react";
import App from "./src/App";


AppRegistry.registerComponent(appName, () => App);
