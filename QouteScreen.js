import React from 'react';
import { Button, View, Text } from 'react-native';

export default class QoutesScreen extends React.Component {
  render() {
    const param = this.props.navigation.getParam('param','no-param')
    const otherParam = this.props.navigation.getParam('otherParam','no-other-param')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Qoute Screen</Text>       
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
    );
  }
}