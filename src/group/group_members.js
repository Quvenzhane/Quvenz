import React, { Component } from 'react'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Card, CardItem, H3, Fab, Icon } from 'native-base';
import { Alert } from 'react-native';
import styles from './style'; 

 
ShowAlertDialog = () =>{
 
    Alert.alert(
        '',
        'Edit user access',
        [
          {text: 'Make Admin', onPress: () => console.log('OK Pressed')},
          {text: 'Remove', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Block', onPress: () => console.log('OK Pressed')},
        ],
        // { cancelable: false }
      )
  }

export default class GroupMember extends Component {
 
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
            <Content>
                <Card>
                    <CardItem header style={{height:10}} >
                        <Text>Group creator</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                              Create by Judah at 09/05/2018
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <Text note style={{paddingTop:20}}> Group Members</Text>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/pic1.jpg')} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note onPress={ShowAlertDialog}>Doing what you like will always keep you happy . .</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/pic2.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Mayow will</Text>
                            <Text note onPress={ShowAlertDialog}>I wish i had time machine</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/pic3.jpg')}/>
                        </Left>
                        <Body>
                            <Text>Ike Jonas</Text>
                            <Text note onPress={ShowAlertDialog}>KISS</Text>
                        </Body>
                        <Right><Text note>admin</Text></Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../images/cam.png')}/>
                        </Left>
                        <Body>
                            <Text>Mayow will</Text>
                            <Text note onPress={ShowAlertDialog}>I wish i had time machine</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
            <Fab
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() =>navigate('AddPicture')}>
                <Icon name="add" />
            </Fab> 
        </Container>
    )
  }
}
