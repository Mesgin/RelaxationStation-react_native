import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, NavigatorIOS } from 'react-native'
import zen from './zen.png'
import StartScreen from './StartScreen.js'
// import QouteScreen from './QouteScreen'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: StartScreen,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    )
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
