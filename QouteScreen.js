import React from 'react'
import { Button, View, Text, ImageBackground, StyleSheet, Platform } from 'react-native'
const bg = require('./assets/img/bg.jpg')

export default class QoutesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.otherParam : 'Qoutes Title'
    }
  }
  render() {
    const param = this.props.navigation.getParam('param', 'no-param')
    const otherParam = this.props.navigation.getParam('otherParam', 'no-other-param')

    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.qouteText}>Qoute Screen</Text>
          <Text>Param: {JSON.stringify(param)}</Text>
          <Text>Other Param: {JSON.stringify(otherParam)}</Text>
          <Text style={styles.qouteText}>{JSON.stringify(this.props.screenProps[0])}</Text>
          <Button
            title="Next Qoute"
            onPress={() => this.props.navigation.goBack()}
            style={styles.button}
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
    // resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  qouteText: {
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    fontSize: 36,
    marginVertical: 30,
    color: '#4e535b'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white'
  }
})