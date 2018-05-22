import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, NavigatorIOS } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import zen from './zen.png'
import HomeScreen from './HomeScreen.js'
import QouteScreen from './QouteScreen.js'

const RootStack = createStackNavigator({
  Home: {screen:HomeScreen},
  Qoute: {screen:QouteScreen}
},
{
  initialRouteName: 'Home',
}
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4feff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  button: {
    backgroundColor: '#9bc5c9',
    padding: 10,
    marginBottom: 0,
    marginTop: 20,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.30,
    shadowRadius: 4

  },
  zenImg: {
    width: 100,
    height: 100
  }
});
