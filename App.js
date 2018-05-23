import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import QouteScreen from './QouteScreen'
import HomeScreen from './HomeScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Qoutes: QouteScreen
  },
  {
    initialRouteName: 'Home',
  }
)
const qoutes = ["Qoute 1","Qoute 2","Qoute 3","Qoute 4","Qoute 5"]

export default class App extends React.Component {
  render() {
    return <RootStack screenProps={qoutes}/>;
  }
}