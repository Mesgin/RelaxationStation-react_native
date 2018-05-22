import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import QouteScreen from './QouteScreen'
import HomeScreen from './HomeScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: QouteScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}