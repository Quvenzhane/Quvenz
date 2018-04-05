import React, { Component } from 'react'; 
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Item, Input,
    Card, CardItem,Right,Left,Thumbnail,Body, H1  } from 'native-base'; 
import { Image,ScrollView, View, AsyncStorage } from 'react-native';
import { StackNavigator,} from 'react-navigation';

import HomeHeader from './header'; 
import HomeFooter from './footer'; 
import HomeBody from './body'; 

export default class HomeScreen extends Component {

   
   async componentWillMount() {
       try 
       {    console.log('componentWillMount : ...')
            await AsyncStorage.setItem('teststuff1','testvalue1');
            
            const token = await AsyncStorage.getItem('@pixfam_token');
            if (!token) { console.log('no token');
                this.props.navigation.navigate('Login');
            return;
            }
            console.log('there is token');
       } catch (error) {
           console.log('error: '+error.message);
           
       } 
      };
    

     render() {  console.log('homejs')
        const { navigate } = this.props.navigation;

         return (   
            <Container> 
               <HomeHeader theNav={navigate}/>
               <HomeBody theNav={navigate}/>
               <HomeFooter theNav={navigate}/>
            </Container>
        ); 
    }
 }