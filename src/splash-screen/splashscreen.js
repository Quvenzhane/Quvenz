import React, { Component } from 'react'
import {StyleSheet,Text, View, TouchableOpacity, Navigator} from 'react-native';
import { StackNavigator,} from 'react-navigation';
import gql from "graphql-tag";

import styles from './style';
import {client} from './../graph/client';

export default class SplashScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };
  componentDidMount(){
    console.log('component did munt');
    
    client.query({query: gql `
    {
        getGroups{
          title,
          description,
          created_at
        }
      }
    `}).then((res) =>
      {
        console.log('gotten query: ');
        console.log(res);
        //this.ddata = res.getGroups[0];

        
      }).catch(function(e) {
        console.log('error');
        this.ddata = 'error';
        console.log(e); // "oh, no!"
      });


  }

  render() {
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Pixfam {this.ddata} </Text>
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
