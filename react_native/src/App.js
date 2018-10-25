"use strict";

import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from "react-navigation";
import Colors from "./statics/Colors";
import AppStackNavigator from "./components/navigator/AppStackNavigator";

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.main}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#F06767"
        />
        <SafeAreaView style={{flex: 1}} forceInset={{bottom: "never"}}>
          <AppStackNavigator/>
        </SafeAreaView>
      </View>
    );
  }
}
