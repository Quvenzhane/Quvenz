import React, { Component } from 'react'
import { Text,TextInput, View, StyleSheet, TouchableOpacity , StatusBar} from 'react-native'

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle="light-content" />
        
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
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding:20,
    },
    input:{
        height:40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10,

    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15
    },
    buttonText:{
        textAlign: 'center',
        color: '#ffffff',
        fontWeight:'700'
    }
   
  });