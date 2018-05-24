import React from 'react'
import { Button, View, Text, ImageBackground, StyleSheet, Platform, TouchableOpacity } from 'react-native'
const bg = require('./assets/img/zen.jpg')

export default class QuotesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.otherParam : 'Quotes Title'
    }
  }
  state = {
    quoteIndex: 0
  }
  nextQuote = () => {
    this.setState({
      quoteIndex: (this.state.quoteIndex >= this.props.screenProps.length - 1) ? 0 : this.state.quoteIndex + 1
    })
  }
  render() {
    const param = this.props.navigation.getParam('param', 'no-param')
    const otherParam = this.props.navigation.getParam('otherParam', 'no-other-param')

    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Text style={styles.quoteText}>Quote Screen</Text> */}
          {/* <Text>Param: {JSON.stringify(param)}</Text>
          <Text>Other Param: {JSON.stringify(otherParam)}</Text> */}
          <Text style={styles.quoteText}>{JSON.stringify(this.props.screenProps[this.state.quoteIndex])}</Text>
          <TouchableOpacity
            onPress={this.nextQuote}
            style={styles.button}
          >
            <Text style={styles.text}>
              Next Quote
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
  quoteText: {
    flex: 2,
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    alignItems: 'center',
    fontSize: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginVertical: 30,
    color: '#f7f7f7',
    padding: 5,
    marginLeft: 5,
    marginRight: 5
  },
  button: {
    backgroundColor: '#06767f',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30
  },
  text: {
    fontSize: 24,
    color: '#f7f7f7'
  }
})