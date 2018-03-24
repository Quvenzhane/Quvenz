import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon, Body} from 'native-base';
import styles from './style'; 

export default class ListGroup extends Component {
  render() {
    const { navigate } = this.props.navigation;
    var items = ['Family (4)','Haters (2)','Beevas (1)','Laravel Meetup (4)','Excursions (20)'];
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
                <Text>Event</Text>
                <Badge primary>
                    <Text>45</Text>
                </Badge>
             </View> 
             <View style={styles.listHeader}> 
                <Icon name="add" style={{paddingRight:15}}
                                 onPress={() =>navigate('CreateGroup')}/>
                <H3>Followed Groups</H3>
             </View>   
            <List dataArray={items}
                renderRow={(item) =>
                <ListItem>
                    <Body>
                        <Text  onPress={() =>navigate('Group')}>{item}</Text>
                        <Text note>103,004 participants</Text>
                    </Body>
                </ListItem>
                }>
            </List>
        </Content>
    </Container>
    )
  }
}
