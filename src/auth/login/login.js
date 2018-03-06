import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './loginform';

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image  
            style={styles.logo}
            source={require('../../../images/cam.png')} />
          <Text style={styles.title}>Capture every moment</Text>

        </View>
        
        <View style={styles.formContainer}>
          <LoginForm/>
               
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title:{
    color: '#fff',
    marginTop: 10,
    width: 140,
    textAlign: 'center',
    opacity: 0.7
  },
});
