import React, { Component } from 'react'; 
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Item, Input,
    Card, CardItem,Right,Left,Thumbnail,Body, H1  } from 'native-base'; 
import { Image,ScrollView, View } from 'react-native';

import HomeHeader from './header'; 
import HomeFooter from './footer'; 
import HomeBody from './body'; 


export default class HomeScreen extends Component {

     render() { 
         return (   
            <Container> 
               <HomeHeader/>
               <HomeBody/>
               <HomeFooter/>
            </Container>
        ); 
    }
 }