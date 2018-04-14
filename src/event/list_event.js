import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon, Button, Body} from 'native-base';
import { Right, Left} from 'native-base';

import styles from './style'; 
import globalColor from '../../config/app-colors'; 


export default class ListEvent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    var items = ['Sola Birthday','Jonas Jnr Birthday'];
    return (
         <Container style={styles.container}>
            <Content>
                <View style={styles.metricsContainer}>
                    <Text>  Pictures  </Text>
                    <Badge>
                        <Text>2</Text>
                    </Badge>
                 </View> 
                 <View style={styles.listHeader}> 
                     <Icon name="add" style={{paddingRight:15}}
                                 onPress={() =>navigate('CreateEvent')}/>                
                    <H3 style={styles.header}>Followed Events</H3>
                 </View>   
                <List dataArray={items}
                    renderRow={(item) =>
                    <ListItem>
                        <Icon name="lock" style={{color:"gray"}}/>
                        <Body>
                            <Text onPress={() =>navigate('Event')}>{item} </Text>
                            <Text note>43,004 pictures</Text>
                        </Body>
                        <Text note style={globalColor.appDarkPrimayColor} onPress={() =>navigate('AddEventParticipant')}>share</Text>
                    </ListItem>
                    
                    }>
                </List>
                <List dataArray={items}
                    renderRow={(item) =>
                    <ListItem>
                        <Icon name="people" style={{color:"gray"}}/>
                        <Body>
                            <Text onPress={() =>navigate('Event')}>{item} </Text>
                            <Text note>43,004 pictures</Text>
                        </Body>
                        <Text note style={globalColor.appDarkPrimayColor} onPress={() =>navigate('AddEventParticipant')}>share</Text>
                    </ListItem>
                    
                    }>
                </List>
            </Content>
        </Container>
    )
  }
}