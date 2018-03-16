import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,} from 'react-navigation';

import SplashScreen from './src/splash-screen/splashscreen';
import SignupScreen from './src/auth/signup/signup';
import LoginScreen from './src/auth/login/login';

const Application = StackNavigator(
  {
    Splash: { screen: SplashScreen },
    Signup: { screen: SignupScreen },
    Login: { screen: LoginScreen },
  },
  {
    navigationOptions:{
    header:false,
  } 

});

export default class App extends Component {
  render() {
    return (
      <Application/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});