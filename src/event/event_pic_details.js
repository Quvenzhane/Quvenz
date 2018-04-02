import React, { Component } from 'react'
import { Image, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { List, ListItem, H3, Item, Input, Form } from 'native-base';
import styles from './style'; 

export default class EventPicDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <Text note style={{padding:10}}>Reactions to Mayowa picture</Text> 
      <Content >
        <Card>
          <CardItem cardBody>
            <Image source={require('../../images/event1.jpg')} style={{height: 300, width: null, flex: 1}}/>
          </CardItem>
          <CardItem style={{height:40}} >
            <Left>
              <Button transparent>
                <Icon  name="ios-heart" style={{ color: '#ED4A6A' }}/>
                <Text>12 Likes</Text>
              </Button>
              <Button transparent  >
                <Icon  name="ios-chatbubbles-outline" />
                <Text>4 Comments</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
      <Form>
        <View style={{paddingTop:15, paddingBottom:15 }}>
            <Item rounded >
            <Input placeholder='Add comment' />
            <Icon  name="send" />
            </Item>
        </View>
      </Form>
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
