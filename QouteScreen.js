import React from 'react'
import { Button, View, Text, ImageBackground, StyleSheet, Platform } from 'react-native'
const bg = require('./assets/img/bg.jpg')

export default class QoutesScreen extends React.Component {
  render() {
    const param = this.props.navigation.getParam('param', 'no-param')
    const otherParam = this.props.navigation.getParam('otherParam', 'no-other-param')

    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.qouteText}>Qoute Screen</Text>
          <Text>Param: {JSON.stringify(param)}</Text>
          <Text>Other Param: {JSON.stringify(otherParam)}</Text>
          <Text>{JSON.stringify(this.props.screenProps[0])}</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  qouteText: {
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    fontSize: 36,
    marginVertical: 30
  }
})