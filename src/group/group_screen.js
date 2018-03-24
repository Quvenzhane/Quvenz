import React, { Component } from 'react'
import { Container, Content, Badge, Icon, View, Text, H3} from 'native-base';
import { List, ListItem, Body, Thumbnail} from 'native-base';

import styles from './style'; 

export default class GroupScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
            <Content>
                <View style={styles.metricsContainer}>
                    <Text>All Pictures</Text>
                    <Badge>
                        <Text>2,080</Text>
                    </Badge>
                    <Text>Events</Text>
                    <Badge success>
                        <Text>4</Text>
                    </Badge>
                </View> 
            <H3>Event in group</H3>
            <List>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/star.png') } />
                        <Body>
                            <Text>Soduko Family</Text>
                            <Text note>123 pictures . .</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/cam.png') } />
                        <Body>
                            <Text>Annual Thanks giving</Text>
                            <Text note>300 pictures</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/cam.png') } />
                        <Body>
                            <Text>Startup Grind</Text>
                            <Text note>132 pictures</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../../images/cam.png') } />
                        <Body>
                            <Text>Ladies Beach time</Text>
                            <Text note>1,290 pictures</Text>
                        </Body>
                    </ListItem>
                </List>
                </Content>

        </Container>
    )
  }
}
