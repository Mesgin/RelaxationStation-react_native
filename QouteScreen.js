import React from 'react'
import { Button, View, Text, ImageBackground, StyleSheet, Platform, TouchableOpacity } from 'react-native'
const bg = require('./assets/img/bg.jpg')

export default class QoutesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.otherParam : 'Qoutes Title'
    }
  }
  state = {
    qouteIndex: 0
  }
  nextQoute = () => {
    this.setState({
      qouteIndex: (this.state.qouteIndex >= this.props.screenProps.length - 1) ? 0 : this.state.qouteIndex + 1
    })
  }
  render() {
    const param = this.props.navigation.getParam('param', 'no-param')
    const otherParam = this.props.navigation.getParam('otherParam', 'no-other-param')

    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Text style={styles.qouteText}>Qoute Screen</Text> */}
          {/* <Text>Param: {JSON.stringify(param)}</Text>
          <Text>Other Param: {JSON.stringify(otherParam)}</Text> */}
          <Text style={styles.qouteText}>{JSON.stringify(this.props.screenProps[this.state.qouteIndex])}</Text>
          <TouchableOpacity
            onPress={this.nextQoute}
            style={styles.button}
          >
            <Text style={styles.text}>
              Next Qoute
          </Text>
          </TouchableOpacity>
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
    flex: 2,
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    alignItems: 'center',
    fontSize: 36,
    marginVertical: 30,
    color: '#4e535b',
    padding: 5,
    marginLeft: 5,
    marginRight: 5
  },
  button: {
    backgroundColor: '#00edff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30
  },
  text: {
    fontSize: 24
  }
})