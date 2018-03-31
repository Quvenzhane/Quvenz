import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon, Button, Body} from 'native-base';
import { Right, Left} from 'native-base';

import styles from './style'; 

export default class ListEvent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    var items = ['Sola Birthday','Experience 2018','Happy Year 2019','Laravel Meetup','Emre Can'];
    return (
         <Container style={styles.container}>
            <Content>
                <View style={styles.metricsContainer}>
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
                 <View style={styles.listHeader}> 
                     <Icon name="add" style={{paddingRight:15}}
                                 onPress={() =>navigate('CreateEvent')}/>                
                    <H3>Followed Events</H3>
                 </View>   
                <List dataArray={items}
                    renderRow={(item) =>
                    <ListItem>
                        <Body>
                            <Text onPress={() =>navigate('Event')}>{item} </Text>
                            <Text note>43,004 pictures</Text>
                        </Body>

                    </ListItem>
                    }>
                </List>
            </Content>
        </Container>
    )
  }
}