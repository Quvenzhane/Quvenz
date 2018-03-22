import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import styles from './style'; 

export default class ListGroup extends Component {
  render() {
    var items = ['Family','Experience 2018','Happy Year 2019','Laravel Meetup','Emre Can'];
    return (
         <Container style={styles.container}>
            <Content>
                <List dataArray={items}
                    renderRow={(item) =>
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                    }>
                </List>
            </Content>
        </Container>
    )
  }
}
