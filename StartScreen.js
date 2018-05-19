import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import zen from './zen.png'

class StartScreen extends React.Component {
  onNavigatorClick(nextRoute) {
    this.props.navigator.push(nextRoute);
  }
  render() {
    const nextRoute = {
      component: MyView,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>I'm ready to relax...</Text>
        <TouchableOpacity style={styles.button} onPress={this.props.onNavigatorClick}>
          <Image source={zen} style={styles.zenImg} />
        </TouchableOpacity>
      </View>
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
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.30,
    shadowRadius: 4

  },
  zenImg: {
    width: 100,
    height: 100
  }
})

export default StartScreen

