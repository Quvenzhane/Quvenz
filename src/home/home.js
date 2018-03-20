import React, { Component } from 'react'; 
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Item, Input,
    Card, CardItem,Right,Left,Thumbnail,Body  } from 'native-base'; 
import { Image,ScrollView } from 'react-native';
import styles from './style' 

export default class HomeScreen extends Component {

     render() { 
         return (   
            <Container> 
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Button >
                            <Icon name="add" />
                        </Button>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                {/* <ScrollView>   
                <Image source={require('../../images/cam.png')} style={{height: 100, width: 100, flex: 2}}/>
               <Image source={require('../../images/cam.png')} style={{height: 100, width: 100, flex: 2}}/>
               </ScrollView> */}

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
                <Footer> 
                    <FooterTab> 
                        <Button vertical>
                            <Icon name="search" />
                            <Text>Find</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="people" />
                            <Text>Group</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="happy" />
                            <Text>Event</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="notifications" />
                            <Text>Updates</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab> 
                </Footer> 
            </Container>
        ); 
    }
 }