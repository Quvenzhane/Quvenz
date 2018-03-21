import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon, Item, Input,
         Card, CardItem,Right,Left,Thumbnail,Body, H1  } from 'native-base'; 
import { Image,ScrollView, View } from 'react-native'; 
import styles from './style'; 

export default class HomeBody extends Component {
  render() {
    return (
        <Content>
        <View style={styles.defaultGroup}>
            <View style={styles.groupBirthday} >
                <Icon name="add" />
                <H1>B</H1>
                <Text> Birthday</Text>
            </View>    
            <View style={styles.groupWedding}  >
                <Icon name="add" />
                <H1>W</H1>
                <Text>Wedding</Text>
            </View>    
            <View style={styles.groupGraduation}  >
                <Icon name="add" />
                <H1>G</H1>
                <Text>Graduation</Text>
            </View>    
        </View>

    <Content style={styles.container}>
        <Card>
            <CardItem>
            <Left>
                <Body>
                <Text>Birthday</Text>
                <Text note>10/10/2018</Text>
                </Body>
            </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={require('../../images/cam.png')} style={{height: 100, width: 100, flex: 2}}/>
            </CardItem>
                
        </Card>

        <Card  >
            <CardItem header>
                <Text>Popular Events</Text>
            </CardItem> 
            <CardItem>
                <Text>The Experience 2018</Text>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </CardItem>
            <CardItem>
                <Text>Osun Osun-oshogo</Text>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </CardItem>
            <CardItem>
                <Text>Laravel Meetup 2020</Text>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </CardItem> 
        </Card>
    </Content> 
    </Content> 
    )
  }
}
