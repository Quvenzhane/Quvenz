import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, 
  KeyboardAvoidingView, TouchableOpacity , StatusBar, Navigator,ImageBackground } from 'react-native';

import styles from './style' 

export default class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground style={styles.backgroundContainer} source={require('../../../images/signup_bk.png')}>
              <View style={styles.sologanText}>
                <Text style={styles.title}>Capture every moment</Text>
              </View>
            <View style={styles.formContainer}>
              <TextInput style={styles.input}
                  placeholder="username or email"
                  returnKeyType="next"
                  onSubmitEditing ={() => this.passwordInput.focus()}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect ={false}
                  placeholderTextColor='#0049d9'/>

              <TextInput style={styles.input}
                      placeholder="password"
                      returnKeyType="go"
                      placeholderTextColor='#0049d9'
                      ref={(input) => this.passwordInput = input}
                      secureTextEntry/>

              <TouchableOpacity style={styles.buttonContainer} 
                    onPress={() =>navigate('Home')}>
                  <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
           </View>
        </ImageBackground >
    </KeyboardAvoidingView>
    );
  }
}
