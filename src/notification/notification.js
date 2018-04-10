import React, { Component } from 'react'
import { Image, View, Alert} from 'react-native'; 
import { Container, Content, List, ListItem, Body, Right, Thumbnail, Text } from 'native-base';
import styles from './style';
import globalColor from '../../config/app-colors'; 

ShowAlertDialog = () =>{
 
    Alert.alert(
        '',
        'Notification response',
        [
          {text: 'Accept', onPress: () => console.log('OK Pressed')},
          {text: 'Reject', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        // { cancelable: false }
      )
  }
  export default class Notification extends Component {
  render() {
    return (
        <Container style={styles.container}>
             <Content>
                 <List>
                    <ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                        <Text note onPress={ShowAlertDialog} style={globalColor.appDarkPrimayColor}>respond</Text>
                    </ListItem>
                    <ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                        <Text note onPress={ShowAlertDialog} style={globalColor.appDarkPrimayColor}>respond</Text>
                    </ListItem>
                    <ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                        <Text note onPress={ShowAlertDialog} style={globalColor.appDarkPrimayColor}>respond</Text>

                    </ListItem>
                    <ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                        <Text note onPress={ShowAlertDialog} style={globalColor.appDarkPrimayColor}>respond</Text>

                    </ListItem>
                </List>    
             </Content>
        </Container>     
    )
  }
}
