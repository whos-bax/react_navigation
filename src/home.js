/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User', {
              userIdx: 100,
              userName: 'Gil-dong',
              userLastName: 'Hong',
            });
          }}
        />
        <Button
          title="Change the Title"
          onPress={() => {
            this.props.navigation.setOptions({
              title: 'changed',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: 'white',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
