import React, { Component } from 'react'
import { Image, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { List, ListItem, H3, Item, Input, Form } from 'native-base';
import styles from './style'; 

export default class EventPicDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
          <Card style={{borderRadius :7}}>
              <CardItem style={{height:40,  borderRadius :7}} >
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

      <Text note style={{padding:10}}>Reactions to Mayowa picture</Text> 

      <View style={styles.containerPicComment}>
    
      <List>
          <ListItem avatar>
              <Body>
                <View style={{  flex:1, flexDirection: 'row'}}>
                  <Thumbnail small source={{ uri: 'https://magbodo.com/asset/pixfam-images/pic3.jpg'}}/>
                  <Text style={{padding:5}}> Kumar Pratik</Text>
                </View>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
          </ListItem>
          <ListItem avatar>
              <Body>
                <View style={{  flex:1, flexDirection: 'row'}}>
                  <Thumbnail small source={{ uri: 'https://magbodo.com/asset/pixfam-images/pic2.jpg'}}/>
                  <Text style={{padding:5}}> Kumar Pratik</Text>
                </View>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
          </ListItem>
          <ListItem avatar>
              <Body>
                <View style={{  flex:1, flexDirection: 'row'}}>
                  <Thumbnail small source={{ uri: 'https://magbodo.com/asset/pixfam-images/pic1.jpg'}}/>
                  <Text style={{padding:5}}> Kumar Pratik</Text>
                </View>
                <Text note>Doing what you like will always keep you happyDoing what you like will always keep you happyDoing what you like will always keep you happyDoing what you like will always keep you happyDoing what you like will always keep you happy . .</Text>
              </Body>
          </ListItem>
          <ListItem avatar>
              <Body>
                <View style={{  flex:1, flexDirection: 'row'}}>
                  <Thumbnail small source={{ uri: 'https://magbodo.com/asset/pixfam-images/pic3.jpg'}}/>
                  <Text style={{padding:5}}> Kumar Pratik</Text>
                </View>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
          </ListItem>
         
        </List>
        <Form>
          <View style={{padding:20 , marginBottom:20}}>
              <Item rounded >
              <Input placeholder='Add comment' />
              <Icon  name="send" />
              </Item>
          </View>
       </Form>
    
    </View>
    
    
    </ScrollView>

    )
  }
}
