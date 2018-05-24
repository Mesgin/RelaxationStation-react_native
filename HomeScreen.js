import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import zen from './zen.png'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue' }} >
        <Text style={styles.title}>I'm ready to relax...</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate('Qoutes', { param: 10, otherParam: 'extra' })}>
        <Text style={styles.text}>start</Text>
        </TouchableOpacity>
      </View>
    );
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
    backgroundColor: '#00edff',
    padding: 15,
    marginBottom: 0,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 10

  },
  zenImg: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 24
  }
})