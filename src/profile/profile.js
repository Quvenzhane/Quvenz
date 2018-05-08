import React, { Component } from 'react';
import { Image,ScrollView, View } from 'react-native'; 
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, H3 } from 'native-base';
import styles from './style'; 
import globalColor from '../../config/app-colors'; 
import { Query } from "react-apollo";
import { GET_PROFILE} from '../graph/queries/profileQueries';

export default class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

        <Query query={GET_PROFILE}>
            {({ loading, error, data }) => {
            var theList = null;

            if (loading) return <Text>Loading...</Text>;
           // if (error) return <Text>Error :(</Text>;

           if(data){ console.log('there is data'); loadingIt = ""; errorShit = "";
                if(data.getProfile.groupMember){
                    
                    groupList = (
                        <List dataArray={data.getProfile.groupMember}
                        renderRow={(groups) =>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../images/cam.png') } />
                                <Body>
                                    <Text  onPress={() =>navigate('Group')}>{groups.group.title}</Text>
                                    <Text note>123 Participants . .</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>)
                }
                if(data.getProfile.eventMember){
                    eventList=(
                        <List dataArray={data.getProfile.eventMember}
                        renderRow={(events) =>
                            <ListItem>
                                <Body>
                                    <Text  onPress={() =>navigate('Event')}>{events.event.title}</Text>
                                    <Text note>{events.event.description}</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>

                    )
                    
                }
            }
            return(
                <Container  style={styles.container}>            
                    <View style={styles.containerWhite}>
                        <List>
                            <ListItem>
                            <Thumbnail large source={require('../../images/pic.jpg')}  />
                            <Body style={styles.itemPad} >
                                <H3 style={styles.itemPad}>{data.getProfile.user.username}</H3>
                                <Text style={styles.itemPadBottom} note>{data.getProfile.country}.{data.getProfile.state}</Text>
                                <Button  rounded info>
                                    <Text>Edit Profile</Text>
                                </Button>
                            </Body> 
                            </ListItem>
                        </List>
                    </View>
                    <Content>
                        <Text note style={styles.groupHeader}>GROUPS</Text>    
                        {groupList}
                        <Text note style={styles.groupHeader}>EVENTS</Text>
                        {eventList}
                        <Text>{console.log(data.getProfile)}</Text>
                    </Content>
                </Container>  
                )
                
            }}
        </Query>
       
    )
  }
}
