import React, {Component} from "react";
import {View} from "react-native";
import SearchBar from "../../components/search-bar";
import {createMaterialTopTabNavigator} from "react-navigation";
import ApplyScreen from "./apply/apply-screen";
import OfferScreen from "./offer/offer-screen";


const Top = createMaterialTopTabNavigator(
  {
    OfferScreen,
    ApplyScreen,
  },

  {
    tabBarOptions: {
      indicatorStyle: {backgroundColor: '#F06767'},
      labelStyle: {color: '#707070'},
      style: {
        backgroundColor: 'white'
      }
    }
  }
);

export default class BoardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar style={{marginHorizontal: 24, marginVertical: 16}}/>
        <Top></Top>
      </View>
    );
  }
}