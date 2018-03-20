import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, 
  KeyboardAvoidingView, TouchableOpacity , StatusBar, Navigator,ImageBackground ,
  AsyncStorage

} from 'react-native';
import { graphql} from 'react-apollo';

import styles from './style' 
import LOGIN_MUTATION  from '../../graph/mutations/loginMutation';
import Loading from '../../components/Loading';


class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "", password: "", loading: false, loggedin: false,
      errorMessage: false
    }
  }
  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
   // console.log(this.state);
  } 
  onLoginPress = async () => {
    this.setState({ loading: true });
    console.log('this.state in onloginpress: ',this.state);

    const { email, password } = this.state;

    try {
      const resp = await this.props.mutate({
        variables: {email, password}
      });
      console.log('resp: ',resp);
      const data = resp.data;
      console.log('data.login.token:'+ data.login.token)
      console.log(data)
      this.setState({ loading: false });
      this.setState({loggedin: true});
      console.log('loggedin? '+this.state.login);
      this.props.navigation.navigate('Home');//this should be after AsyncStorage but it seems 
        //asyncStorage is causing issues right now ... will later look into why
      await AsyncStorage.setItem('@pixfam_token', data.login.token);     
    } catch (error) {
      console.log('error in onlogin: ',error);
      this.setState({errorMessage: error.message});
      throw error;
    }
};


  render() {
    
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground style={styles.backgroundContainer} source={require('../../../images/signup_bk.png')}>
              <View style={styles.sologanText}>
                <Text style={styles.title}>Capture every moment</Text>
                <Text style={styles.title}>{this.state.errorMessage}</Text>
              </View>
            <View style={styles.formContainer}>
            
              <TextInput style={styles.input}
                  placeholder="username or email"
                  returnKeyType="next"
                  onSubmitEditing ={() => this.passwordInput.focus()}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect ={false}
                  onChangeText={text => this.onInputTextChange(text, 'email')}
                  placeholderTextColor='#0049d9'/>

              <TextInput style={styles.input}
                      placeholder="password"
                      returnKeyType="go"
                      placeholderTextColor='#0049d9'
                      onChangeText={text => this.onInputTextChange(text, 'password')}
                      secureTextEntry/>

              <TouchableOpacity style={styles.buttonContainer} 
                    //onPress={() =>navigate('Home')}
                    onPress={this.onLoginPress}
                    >
                  <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
           </View>
        </ImageBackground >
    </KeyboardAvoidingView>
    );
  }
}

export default graphql(LOGIN_MUTATION) ( LoginScreen);
