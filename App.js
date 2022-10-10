/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';

const Stack = createNativeStackNavigator();

class App extends Component {
  logoTitle = () => {
    return (
      <Image
        style={{
          width: 40,
          height: 40,
        }}
        source={require('./src/assets/pics/home_icon.png')}
      />
    );
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}>
          <Stack.Screen
            name="Home"
            options={{
              title: 'Home Screen',
              headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  title="Info"
                  onPress={() => alert('Info Button')}
                  color="red"
                />
              ),
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="User"
            // options={{
            //   title: 'User Screen',
            //   headerStyle: {
            //     backgroundColor: 'black',
            //   },
            //   headerTintColor: 'white',
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //     color: 'yellow',
            //   },
            // }}
            component={UserScreen}
            initialParams={{
              userIdx: 50,
              userName: 'Gil-dong',
              userLastName: 'Go',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
