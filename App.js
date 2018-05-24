import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import QuoteScreen from './QuoteScreen'
import HomeScreen from './HomeScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Quotes: QuoteScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#06767f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
const quotes = ["If your mind is empty, it is always ready for anything, it is open to everything. In the beginner’s mind there are many possibilities, but in the expert’s mind there are few.",
  "Wherever you are, you are one with the clouds and one with the sun and the stars you see. You are one with everything. That is more true than I can say, and more true than you can hear.",
  "The most important point is to accept yourself and stand on your two feet.",
  "The person who can freely acknowledge that life is full of difficulties can be free, because they are acknowledging the nature of life – that it can’t be much else."
]

export default class App extends React.Component {
  render() {
    return <RootStack screenProps={quotes}/>;
  }
}