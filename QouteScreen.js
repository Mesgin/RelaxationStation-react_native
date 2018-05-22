import React from 'react';
import { Button, View, Text } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Qoute Screen</Text>
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