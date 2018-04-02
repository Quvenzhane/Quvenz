import React, { Component } from 'react'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Card, CardItem, H3, Fab } from 'native-base';

import styles from './style'; 

export default class EventParticipants extends Component {
  render() {
    return (
        <Container style={styles.container}>
            <H3 style={styles.header}>Soduko Birthday</H3> 
            <Content>
                <Card>
                    <CardItem header style={{height:10}} >
                        <Text>Event Description</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Hi friends! This is my 21st birthday event. I hope guys have lots of fun. Add your pictures please
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Text note style={{paddingTop:20}}> Event participants</Text>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/pic.jpg')} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/pic2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Mayow will</Text>
                            <Text note>I wish i had time machine</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/pic3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Ike Jonas</Text>
                            <Text note>KISS</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/cam.png')}/>
                        </Left>
                        <Body>
                            <Text>Mayow will</Text>
                            <Text note>I wish i had time machine</Text>
                        </Body>
                    </ListItem>
                </List>
                <Text note> Todo: Event owners should be able to remove or block users</Text>
            </Content>
            <Fab
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() =>navigate('AddPicture')}>
                <Icon name="add" />
            </Fab> 
        </Container>
    )
  }
}
