import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Platform, ImageBackground } from 'react-native'
import zenn from './assets/logo/zen.png'
const bg = require('./assets/img/zen.jpg')

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <ImageBackground source={bg} style={styles.bg}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Text style={styles.title}>I'm ready to relax...</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => this.props.navigation.navigate('Quotes', { param: 10})}>
        <Image source={zenn} style={styles.image}/>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f4feff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  bg: {
    flex: 1,
    // resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  title: {
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    fontSize: 24,
    fontStyle: 'italic',
    color: '#06767f'
  },
  button: {
    backgroundColor: '#f7f7f7',
    padding: 2,
    marginBottom: 0,
    marginTop: 40,
    borderRadius: 100,
    shadowColor: '#06767f',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.50,
    shadowRadius: 7

  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 24
  }
})