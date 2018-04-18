import React, { Component } from 'react'
import {  View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {  H1} from 'native-base'

import styles from './style' 

export default class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.backgroundContainer} source={require('../../images/child.jpg')}>
          <View style={styles.container}>
              <H1 style={styles.welcome}>Welcome to Pixfam</H1>
              <Text style={styles.sologanText} >Share events experience with friends</Text>
              
            <TouchableOpacity style={styles.buttonContainer} 
                  onPress={() =>navigate('WelcomeGroup')}
                  //onPress={this.onLoginPress}
                  >
                <Text style={styles.buttonText}>SET ME UP</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>    
    )
  }
}
