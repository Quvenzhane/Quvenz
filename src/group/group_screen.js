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
                    <Text> Pictures  </Text>
                    <Badge>
                        <Text>280</Text>
                    </Badge>
                </View> 
            <H3 style={styles.header}>Events in a group</H3>
            <Text note>These are the events that belong to this group</Text>
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
