import React, { Component } from 'react'; 
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Item, Input,
    Card, CardItem,Right,Left,Thumbnail,Body, H1, Fab  } from 'native-base'; 
import { Image,ScrollView, View } from 'react-native';
import { StackNavigator,} from 'react-navigation';

import HomeHeader from './header'; 
import HomeFooter from './footer'; 
import HomeBody from './body'; 

export default class HomeScreen extends Component {

     render() { 
        const { navigate } = this.props.navigation;

         return (   
            <Container> 
               <HomeHeader theNav={navigate}/>
               <HomeBody theNav={navigate}/>
                <Fab
                    style={{ backgroundColor: '#2980b9', marginBottom:40
                }}
                    position="bottomRight"
                    onPress={() =>navigate('EventPicDetails')}>
                    <Icon name="add" />
                </Fab>
                <HomeFooter theNav={navigate}/>
            </Container>
        ); 
    }
 }