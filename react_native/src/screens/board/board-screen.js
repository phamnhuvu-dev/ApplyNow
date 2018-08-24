import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SearchBar from "../../components/search-bar";
import {createMaterialTopTabNavigator} from "react-navigation";
import ApplyScreen from "./apply-screen";
import OfferScreen from "./offer-screen";
import * as Dimensions from "react-native/Libraries/Utilities/Dimensions";
import TabsBar from "../../components/tabs-bar";


const Top = createMaterialTopTabNavigator(
  {
    OfferScreen,
    ApplyScreen,
  },

  {
    tabBarComponent: TabsBar
  }
);

export default class BoardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar style={{marginHorizontal: 24, marginVertical: 16}}/>
        <Top></Top>
      </View>
    )
  }
}