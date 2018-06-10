import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Image, ImageBackground,} from 'react-native';
import { KeyboardAvoidingView, Keyboard, TouchableOpacity , StatusBar, AsyncStorage} from 'react-native';
import {H3, Toast} from 'native-base';
import { graphql, compose } from 'react-apollo';

import styles from './style' 
import SIGNUP_MUTATION from '../../graph/mutations/signupMutation';
import Loading from '../../components/Loading';

class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "", email: "", password: "", imagePath:"", loading: false, signedup: false,
      errorMessage: false,
      showToast: false
    }
  }
  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
  } 

  onSignupPress = async () => {
    Keyboard.dismiss()
    this.setState({ loading: true });
    //temp
    var img = Math.floor(Math.random()*3)+1;
    this.state.imagePath = "https://magbodo.com/asset/pixfam-images/pic"+img+".jpg";
    console.log('this.state in onsignuppress: ',this.state);

    const { username, email, password, imagePath } = this.state;

    try {
      const {data} = await this.props.mutate({
        variables: {username, email, password, imagePath}
      });
      console.log('data.signup.token:'+ data.signup.token)
      console.log(data)
      this.setState({ loading: false });
      this.setState({signedup: true});
      console.log('signed up? '+this.state.signedup);//yeah, I know this is async and the state
      //might not have been set yet... but am leaving it this way for now..
      this.props.navigation.navigate('Welcome');// AsyncStorage is now working well,... but think it's
      //ok to navigate before saving the token. 
        
      
      try{
        await AsyncStorage.setItem('@pixfam_token', data.signup.token);
        await AsyncStorage.setItem('@pixfam_email', email); //used by event member
        console.log('successfully setItem');
      }
      catch(error){
        console.log('error in setItem');
        throw error;
      }

     // here I will later redirect to login ... I'll do 
     //something like:  return this.props.login(); 
     

     // Ope, up to you to do redirection after signup ... my fingers don't want to type 
     // redirection code right now...
    } catch (error) {
      console.log('error in onsignup: ',error);
      this.setState({ loading: false });
      this.setState({errorMessage: error.message});
      Toast.show({
        text: error.message,
        buttonText: 'Okay',
        type: "danger",
        duration: 4000
      });
      throw error;
    }
};
  render() {
    const { navigate } = this.props.navigation;
    return (
        
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ImageBackground style={styles.backgroundContainer} 
                  source={require('../../../images/signup_bk.png')}>

              <View style={styles.container}>
                  <View style={styles.sologanText}>
                    <H3 style={styles.title}>Capture Every Moment</H3>
                    {/* <Text style={styles.title}>{this.state.errorMessage}</Text> */}
                  </View>
                  {this.state.loading && <Loading />}
                  
                  <View style={styles.formContainer}>
                    <TextInput style={styles.input}
                        placeholder="Username"
                        returnKeyType="next"
                        onSubmitEditing ={() => this.passwordEmail.focus()}
                        autoCorrect ={false}
                        autoCapitalize="none"
                        placeholderTextColor='#2980b9'
                      onChangeText={text => this.onInputTextChange(text, 'username')}
                        />

                      <TextInput style={styles.input}
                        placeholder="Email"
                        returnKeyType="next"
                        onSubmitEditing ={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect ={false}
                        ref={(input) => this.passwordEmail = input}
                        placeholderTextColor='#2980b9'
                        onChangeText={text => this.onInputTextChange(text, 'email')}
                        />

                    <TextInput style={styles.input}
                        placeholder="Password"
                        returnKeyType="go"
                        placeholderTextColor='#2980b9'
                        autoCapitalize="none"
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry
                        onChangeText={text => this.onInputTextChange(text, 'password')}
                        />

                    <TouchableOpacity onPress={this.onSignupPress} style={styles.buttonContainer} 
                      disabled={this.state.signedup}>
                        <Text style={styles.buttonText}> {this.state.signedup ? ' Thanks ' : 'SIGN UP'}</Text>
                    </TouchableOpacity>

                    <View style={styles.loginTextContain} >
                     <Text onPress={() =>navigate('Login')}>Do you have an account?</Text>
                      <Text onPress={() =>navigate('Login')} style={styles.loginText}> Log in</Text>     
                    </View>       
                </View>
              </View>

          </ImageBackground >
      </KeyboardAvoidingView>
  
    );
  }
}

export default graphql(SIGNUP_MUTATION) ( SignupScreen);

