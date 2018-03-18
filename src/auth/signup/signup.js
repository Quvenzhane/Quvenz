import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Image, 
  KeyboardAvoidingView, TouchableOpacity , StatusBar, AsyncStorage} from 'react-native';
import { graphql, compose } from 'react-apollo';

import styles from './style' 
import SIGNUP_MUTATION from '../../graph/mutations/signupMutation';
import Loading from '../../components/Loading';

class SignupScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "", email: "", password: "", loading: false, signedup: false
    }
  }
  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
   // console.log(this.state);
  } 
  onSignupPress = async () => {
    this.setState({ loading: true });
    console.log('this.state in onsignuppress: ',this.state);

    const { username, email, password } = this.state;

    try {
      const {data} = await this.props.mutate({
        variables: {username, email, password}
      });
      console.log('data.signup.token:'+ data.signup.token)
      console.log(data)
      this.setState({ loading: false });
      this.setState({signedup: true});
      console.log('signed up? '+this.state.signedup);//yeah, I know this is async and the state
      //might not have been set yet... but am leaving it this way for now..
      await AsyncStorage.setItem('@pixfam_token', data.signup.token);
      
     // here I will later redirect to login ... I'll do 
     //something like:  return this.props.login(); 

     // Ope, up to you to do redirection after signup ... my fingers don't want to type 
     // redirection code right now...
    } catch (error) {
      console.log('error in onsignup: ',error);
      throw error;
    }
};
  render() {
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image  
            style={styles.logo}
            source={require('../../../images/cam.png')} />
          <Text style={styles.title}>Capture every moment</Text>
          {this.state.loading && <Loading />}
        </View>
        <View style={styles.formContainer}>
                <TextInput style={styles.input}
                    placeholder="Username"
                    returnKeyType="next"
                    onSubmitEditing ={() => this.passwordInput.focus()}
                    autoCorrect ={false}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                   onChangeText={text => this.onInputTextChange(text, 'username')}
                    />

                  <TextInput style={styles.input}
                    placeholder="Email"
                    returnKeyType="next"
                    onSubmitEditing ={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect ={false}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={text => this.onInputTextChange(text, 'email')}
                    />

                <TextInput style={styles.input}
                        placeholder="Password"
                        returnKeyType="go"
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        ref={(input) => this.passwordInput = input}
                        secureTextEntry
                        onChangeText={text => this.onInputTextChange(text, 'password')}
                        
                        />

                <TouchableOpacity onPress={this.onSignupPress} style={styles.buttonContainer} 
                  disabled={this.state.signedup}>
                    <Text style={styles.buttonText}> {this.state.signedup ? ' Thanks ' : 'SIGN UP'}</Text>
                </TouchableOpacity>
            </View>
        
      </KeyboardAvoidingView>
    );
  }
}

export default graphql(SIGNUP_MUTATION) ( SignupScreen);

