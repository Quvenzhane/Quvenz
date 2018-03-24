import React, { Component } from 'react'
import { Image, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Badge, View, Icon} from 'native-base';
import { DeckSwiper, Card, CardItem, Thumbnail, Left, Body, H3, Fab, Button } from 'native-base';
import styles from './style'; 

const cards = [
    {
      text: 'By Adebola',
      name: '10',
      image: require('../../images/cam.png'),
      profileImage: require('../../images/pic.jpg'),

    },
    {
        text: 'By 007Lovely',
        name: '354',
        image: require('../../images/pic.jpg'),
        profileImage: require('../../images/pic.jpg'),

    },
      {
        text: 'By ike234',
        name: '16',
        image: require('../../images/star.png'),
        profileImage: require('../../images/pic.jpg'),

    },
  ];

export default class EventScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView style={styles.container}>
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
                    <Icon name="add" style={{paddingRight:15}}
                                onPress={() =>navigate('CreateEvent')}/> 
                </View>

                <H3>Soduko Birthday</H3> 
                <Container style={styles.cardContainer} >
                    <DeckSwiper
                    
                        dataSource={cards}
                        renderItem={item =>
                        <Card style={{ elevation: 3 }} >
                            <CardItem>
                            <Left>
                                <Thumbnail source={item.profileImage} />
                                <Body>
                                <Text>{item.text}</Text>
                                <Text note>#VIP</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem cardBody button  onPress={() =>navigate('EventPicDetails')}>
                                 <Image style={{ height: 200, flex: 1 }} source={item.image} />
                            </CardItem>
                            <CardItem>
                                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                        }
                    />

                 <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                    <Card style={{ elevation: 3 }} >
                        <CardItem>
                        <Left>
                            <Thumbnail source={item.profileImage} />
                            <Body>
                                <Text>{item.text}</Text>
                                <Text note>#VIP</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody button  onPress={() =>navigate('EventPicDetails')}>
                             <Image style={{ height: 200, flex: 1 }} source={item.image} />
                        </CardItem>
                        <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.name}</Text>
                        </CardItem>
                    </Card>
                    }
                />

                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() =>navigate('AddPicture')}>
                    <Icon name="add" />
                </Fab>
                   
                </Container>
              
            
            </Content>    
        </ScrollView>
    )
  }
}
