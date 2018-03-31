import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './style'; 
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
    {
      likes: '10',
      image: require('../../images/cam.png'),
      profileImage: require('../../images/pic.jpg'),

    },
    {
        likes: '354',
        image: require('../../images/pic.jpg'),
        profileImage: require('../../images/pic2.jpg'),

    },
      {
        likes: '16',
        image: require('../../images/star.png'),
        profileImage: require('../../images/pic.jpg'),

    },
  ];

  const profileImages={
    "1":require('../../images/pic.jpg'),
    "2":require('../../images/pic2.jpg'),
    "3":require('../../images/pic3.jpg'),
  }

export default class CardPicByUser extends Component {
  render() {
    return (
        <Container  >
           {/* <Card >      */}
           <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                <Card style={{ elevation: 3 }}>
                    <CardItem style={{height:60}}>
                        <Left>
                            <Thumbnail source={profileImages[this.props.imageSourceProfile]} />
                            <Text note>{this.props.username}</Text>
                        </Left>
                    </CardItem>
                    <CardItem cardBody >
                    <TouchableOpacity onPress={() =>this.props.theNav('EventDetails')} >
                        <Image style={{ height: 250, flex: 1 }} source={item.image} onPress={() =>this.props.theNav('AddPicture')}  />
                        </TouchableOpacity>

                    </CardItem>
                    <CardItem style={{height:40}}>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.likes} Likes</Text>
                    </CardItem>
                </Card>
                }
          />
          {/* </Card>  */}
        </Container>
      );
   
  }
}
