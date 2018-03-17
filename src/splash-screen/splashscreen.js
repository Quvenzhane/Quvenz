import React, { Component } from 'react'
import {StyleSheet,Text, View, TouchableOpacity, Navigator} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import styles from './style';

export default class SplashScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Pixfam</Text>
        <Text style={styles.solgan}>Picture events sharing app</Text>
       
        <TouchableOpacity style={styles.buttonContainer} onPress={() =>
          navigate('Login') }>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}  onPress={() =>
          navigate('Signup') }>
            <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>



      </View>

    
  )
  }

}

// export const myscreens = StackNavigator({
//   // Splash: { screen: SplashScreen },
//   Signup: { screen: SignupScreen },
// });


// const myscreens = StackNavigator({
//   Home: { screen: App },
// });

// export default myscreens;
