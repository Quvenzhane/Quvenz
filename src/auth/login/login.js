import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity}from 'react-native';
import { StatusBar, Navigator,ImageBackground ,AsyncStorage, Keyboard} from 'react-native';
import { H3, Toast } from 'native-base';

import { graphql} from 'react-apollo';
import styles from './style' 
import LOGIN_MUTATION  from '../../graph/mutations/loginMutation';
import Loading from '../../components/Loading';


class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "", password: "", loading: false, loggedin: false,
      errorMessage: false,
      showToast: false
    };
  }
  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
  } 

  onLoginPress = async () => {
    Keyboard.dismiss()
    this.setState({ loading: true });
    console.log('this.state in onloginpress: ',this.state);

    const { email, password } = this.state;

    try {
      const resp = await this.props.mutate({
        variables: {email, password}
      });
      if(resp){
        const data = resp.data;
        this.setState({ loading: false });
        this.setState({loggedin: true});
        this.props.navigation.navigate('Home');// AsyncStorage is now working well,... but think it's
        //ok to navigate before saving the token. 
        
        try{
          await AsyncStorage.setItem('@pixfam_token', data.login.token); 
          await AsyncStorage.setItem('@pixfam_email', email); //used by event member
          console.log('successfully setItem');
        }
        catch(error){
          console.log('error in setItem');
          throw error;
        }  
      }
      else{
        this.setState({ loading: false });
        this.setState({loggedin: false});
        this.setState({errorMessage: 'an unsuspected error occurred..., pls tell us about it'});
        console.log('this will probably only happen if apollo client is not being passed in properly from client.js');
        console.log(JSON.stringify(this.props, null, 4));
    
      }
      
      
    } catch (error) {
      console.log('error in onlogin: ',error);
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

    async componentWillMount() {
        await AsyncStorage.setItem('teststuff1', 'testvalue1');
        const token = await AsyncStorage.getItem('@pixfam_token');
        if (token) {
            this.props.navigation.navigate('Home');
            return;
        }
    };


  render() {
    
    const { navigate } = this.props.navigation;
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ImageBackground style={styles.backgroundContainer} source={require('../../../images/signup_bk.png')}>
              
                <View style={styles.sologanText}>
                  <H3 style={styles.title}>Capture Every Moment</H3>
                </View>
                {this.state.loading && <Loading />}
              <View style={styles.formContainer}>
              
                <TextInput style={styles.input}
                    placeholder="Username or email"
                    returnKeyType="next"
                    onSubmitEditing ={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect ={false}
                    onChangeText={text => this.onInputTextChange(text, 'email')}
                    placeholderTextColor='#2980b9'/>

                <TextInput style={styles.input}
                        placeholder="Password"
                        returnKeyType="go"
                        autoCapitalize="none"
                        placeholderTextColor='#2980b9'
                        ref={(input) => this.passwordInput = input}
                        onChangeText={text => this.onInputTextChange(text, 'password')}
                        secureTextEntry/>

                <TouchableOpacity style={styles.buttonContainer} 
                      //onPress={() =>navigate('Home')}
                      onPress={this.onLoginPress}
                      >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <View style={styles.signupTextContain} >
                    <Text onPress={() =>navigate('Signup')}>Don't have an account?</Text>
                    <Text onPress={() =>navigate('Signup')} style={styles.signupText}> Sign up</Text>     
                </View>   
            </View>
          </ImageBackground >
        </KeyboardAvoidingView>
    );
  }
}

export default graphql(LOGIN_MUTATION) ( LoginScreen);
