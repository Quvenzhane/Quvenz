import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon} from 'native-base';
import styles from './style'; 

export default class ListEvent extends Component {
  render() {
    var items = ['Sola Bith day','Experience 2018','Happy Year 2019','Laravel Meetup','Emre Can'];
    return (
         <Container style={styles.container}>
            <Content>
                <View style={styles.eventDataContainer}>
                    <Text>Picture</Text>
                    <Badge>
                        <Text>2</Text>
                    </Badge>
                    <Text>Participant</Text>
                    <Badge success>
                        <Text>2</Text>
                    </Badge>
                    <Text>Tag</Text>
                    <Badge primary>
                        <Text>2</Text>
                    </Badge>
                 </View> 
                 <View style={styles.eventListHeader}> 
                    <Icon name="add" style={{paddingRight:15}}/>
                    <H3>Followed Events</H3>
                 </View>   
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
