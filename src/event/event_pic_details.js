import React, { Component } from 'react'
import { Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { List, ListItem, H3, Item, Input } from 'native-base';
import styles from './style'; 

export default class EventPicDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <H3>Soduko Birthday</H3> 
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../images/pic.jpg')} />
              <Body>
                <Text>By Obi</Text>
                <Text note>#VIP</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../../images/cam.png')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="heart" style={{ color: '#ED4A6A' }}/>
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
  
      <Item rounded >
        <Input placeholder='Add comment'  />
      </Item>
      <List style={{backgroundColor:'#fff'}}>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
    </ScrollView>
    )
  }
}