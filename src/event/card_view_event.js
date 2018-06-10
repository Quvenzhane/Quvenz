import React, { Component } from 'react'
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { Card, CardItem, Thumbnail, Left, Right, Body, Icon, Button, Form, Item, Input } from 'native-base';

export default class CardViewEvent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
              <Text note>Jan 30, 2018</Text>
          </Left>  
        </CardItem>
        <CardItem cardBody>
         {/* <TouchableOpacity onPress={() =>this.props.theNav('EventPicDetails')}> */}
            <Image style={{height:200, width:null, flex:1}}  source={{ uri: this.props.imageSource}} />
          {/* </TouchableOpacity>   */}
        </CardItem>

        <CardItem style={{height:45}}>
          <Left>
              <Button transparent>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text> {this.props.likes}</Text> 
              </Button>
              <Button transparent  onPress={() =>this.props.theNav('EventPicDetails')}>
                <Icon name="ios-chatbubbles-outline" style={{color:"black"}} />
                <Text> {this.props.comments}</Text> 
              </Button>
              {/* <Button transparent onPress={() =>this.props.theNav('EventPicDetails')}>
                <Icon name="ios-eye-outline" style={{color:"black"}} />
              </Button> */}
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight:"900" }}>Seunope</Text>
              There is lot of noise about entrepreneurship on the media recently. Unfortunately most young people are still hunting for white collar jobs, they consider entrepreneurship as being too risky and full of lot of uncertainty. Here are five things young people need to know about entrepreneurship to help reduce the risk factor. 
            </Text> 
           
          </Body>
          {/* <Form>
              <View style={{padding:20 , marginBottom:20}}>
                  <Item rounded >
                  <Input placeholder='Add comment' />
                  <Icon  name="send" />
                  </Item>
              </View>
          </Form>  */}
        </CardItem>      
      </Card>         

    ) 
  }
}
