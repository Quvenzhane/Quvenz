import React, { Component } from 'react'; 
import { Container,Fab, Icon} from 'native-base'; 
import { AsyncStorage } from 'react-native';
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
                <Fab style={{ backgroundColor: '#FF6600', marginBottom:40 }}
                    position="bottomRight"
                    onPress={() =>navigate('AddPictureByList')}>
                    <Icon name="add" />
                </Fab>
                <HomeFooter theNav={navigate}/>
            </Container>
        ); 
    }
 }