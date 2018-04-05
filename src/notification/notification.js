import React, { Component } from 'react'
import { Image, View} from 'react-native'; 
import { Container, Content, List, ListItem, Body, Right, Thumbnail, Text } from 'native-base';
import styles from './style';

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
                    </ListItem>
                    <ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                    </ListItem><ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                    </ListItem><ListItem >
                        <Body>
                            <Text note>You are invite to join Family group</Text>
                            <Text>From Ike Johnson</Text>
                        </Body>
                    </ListItem>
                </List>    
             </Content>
        </Container>     
    )
  }
}
