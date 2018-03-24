import React, { Component } from 'react';
import { Image,ScrollView, View } from 'react-native'; 
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, H3 } from 'native-base';
import styles from './style'; 

export default class Profile extends Component {
  render() {
    return (
        <Container  style={styles.container}>            
            <View style={styles.containerWhite}>
                <List>
                    <ListItem>
                    <Thumbnail large source={require('../../images/pic.jpg')}  />
                    <Body style={styles.itemPad} >
                        <H3 style={styles.itemPad}>Johnson Obi</H3>
                        <Text style={styles.itemPadBottom} note>Lagos</Text>
                        <Button  rounded info>
                            <Text>Edit Profile</Text>
                        </Button>
                    </Body> 
                    </ListItem>
                </List>
            </View>
            <Content>
                <Text note style={styles.groupHeader}>GROUPS</Text>    
                <List>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/star.png') } />
                        <Body>
                            <Text>My Family</Text>
                            <Text note>123 Participants . .</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/cam.png') } />
                        <Body>
                            <Text>Religious</Text>
                            <Text note>3,340 Participants</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/cam.png') } />
                        <Body>
                            <Text>TGIF Lagos</Text>
                            <Text note>132,909 Participants</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/cam.png') } />
                        <Body>
                            <Text>TGIF Abuja</Text>
                            <Text note>12,909 Participants</Text>
                        </Body>
                    </ListItem>
                </List>
                <Text note style={styles.groupHeader}>EVENTS</Text>
                <Text style={styles.itemPad}>Thiknb, Thank,Thiknb, Thank,Thiknb, Thank,Thiknb, Thank,Thiknb, Thank,Thiknb, Thank,Thiknb, Thank, </Text>
                
            </Content>
        </Container>
    )
  }
}
