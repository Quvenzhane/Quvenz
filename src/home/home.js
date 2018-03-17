import React, { Component } from 'react'; 
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base'; 
  
export default class HomeScreen extends Component {
     render() { 
         return (
            //  <View>
                    // <Text>Hope</Text>
            //  </View>    
            <Container> 
                <Header /> 
                <Content /> 
                <Footer> 
                    <FooterTab> 
                        <Button vertical>
                            <Icon name="search" />
                            <Text>Find</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="group" />
                            <Text>Group</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="event" />
                            <Text>Event</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="alarm" />
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