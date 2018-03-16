import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Image, 
  KeyboardAvoidingView, TouchableOpacity , StatusBar} from 'react-native';

import styles from './style' 

export default class SignupScreen extends Component {
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
                <TextInput style={styles.input}
                    placeholder="username or email"
                    returnKeyType="next"
                    onSubmitEditing ={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect ={false}
                    placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style={styles.input}
                        placeholder="password"
                        returnKeyType="go"
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        
      </KeyboardAvoidingView>
    );
  }
}

