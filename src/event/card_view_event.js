import React, { Component } from 'react'
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { Card, CardItem, Thumbnail, Left, Right, Body, Icon, Button } from 'native-base';

export default class CardViewEvent extends Component {
  render() {

    const images={
      "1":require('../../images/event1.jpg'),
      "2":require('../../images/event2.jpg'),
      "3":require('../../images/event3.jpg'),
      "4":require('../../images/event4.jpg'),
    }

    const profileImages={
      "1":require('../../images/pic.jpg'),
      "2":require('../../images/pic2.jpg'),
      "3":require('../../images/pic3.jpg'),
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={profileImages[this.props.imageSourceProfile]}/>
            <Body>
              <Text>{this.props.username}</Text>
              <Text note>Jan 30, 2018</Text>
            </Body>  
          </Left>  
        </CardItem>
        <CardItem cardBody>
         {/* <TouchableOpacity onPress={() =>this.props.theNav('EventPicDetails')}> */}
            <Image style={{height:200, width:null, flex:1}}  source={images[this.props.imageSource]} />
          {/* </TouchableOpacity>   */}
        </CardItem>

        <CardItem style={{height:45}}>
          <Left>
            <Button transparent>
              <Icon name="heart" style={{ color: '#ED4A6A' }} />
              <Text> {this.props.likes}</Text> 
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{color:"black"}} />
              <Text> {this.props.comments}</Text> 
            </Button>
            <Button transparent onPress={() =>this.props.theNav('EventPicDetails')}>
              <Icon name="ios-eye-outline" style={{color:"black"}} />
            </Button>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight:"900" }}>Seunope</Text>
              There is lot of noise about entrepreneurship on the media recently. Unfortunately most young people are still hunting for white collar jobs, they consider entrepreneurship as being too risky and full of lot of uncertainty. Here are five things young people need to know about entrepreneurship to help reduce the risk factor. 
            </Text>  
          </Body>
        </CardItem>      
      </Card>         

    ) 
  }
}
