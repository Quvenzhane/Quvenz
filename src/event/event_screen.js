import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Content, List, ListItem, Text, Badge, View, Icon} from 'native-base';
import { DeckSwiper, Card, CardItem, Thumbnail, Left, Body } from 'native-base';
import styles from './style'; 

const cards = [
    {
      text: 'Solo Birthday',
      name: '10',
      image: require('../../images/cam.png'),
    },
    {
        text: 'Solo Birthday',
        name: '354',
        image: require('../../images/pic.jpg'),
    },
      {
        text: 'Solo Birthday',
        name: '16',
        image: require('../../images/star.png'),
    },
  ];

export default class EventScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
            <Content>
                <View style={styles.metricsContainer}>
                    <Text>Pictures</Text>
                    <Badge>
                        <Text>121</Text>
                    </Badge>
                    <Text>Participant</Text>
                    <Badge success>
                        <Text>27</Text>
                    </Badge>
                    <Text>Tag</Text>
                    <Badge primary>
                        <Text>12</Text>
                    </Badge>
                    <Icon name="add" style={{paddingRight:15}}
                                onPress={() =>navigate('CreateEvent')}/> 
                </View> 
                <Container style={styles.cardContainer}>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={item.image} />
                                <Body>
                                <Text>{item.text}</Text>
                                <Text note>#VIP</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody>
                            <Image style={{ height: 200, flex: 1 }} source={item.image} />
                            </CardItem>
                            <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                        }
                    />

                   
                </Container>
              
            
            </Content>    
        </Container>
    )
  }
}
