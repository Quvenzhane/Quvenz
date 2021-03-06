import React, { Component } from 'react';
import { Image,ScrollView, View } from 'react-native'; 
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, H3, Toast } from 'native-base';
import styles from './style'; 
import globalColor from '../../config/app-colors'; 
import { Query } from "react-apollo";
import { GET_PROFILE} from '../graph/queries/profileQueries';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
          showToast: false
        };
    }
      
  render() {
    const { navigate } = this.props.navigation;
    return (

        <Query query={GET_PROFILE}>
            {({ loading, error, data }) => {
            var groupList = null; var eventList=null;
            var name = null;

            if (loading) return <Text> Loading...</Text>;
            if (error){
                Toast.show({
                    text: error.message,
                    buttonText: 'Okay',
                    type: "danger",
                    duration: 4000
                    });
                    return <Text> Whoops! Something got broken</Text>;
            }

           if(data){ console.log('there is data'); loadingIt = ""; errorShit = "";
                if(data.getProfile.groupMember){
                    
                    groupList = (
                        <List dataArray={data.getProfile.groupMember}
                        renderRow={(groups) =>
                            <ListItem>
                                <View style={styles.groupBox} >
                                    <H3 style={{padding:15, color:"#FFF"}} 
                                        onPress={() =>navigate('Group',{groupId:groups.group._id})}>{groups.group.title.charAt(0)}</H3>
                                </View>                                
                                <Body>
                                    <Text  onPress={() =>navigate('Group',{groupId:groups.group._id})}>{groups.group.title}</Text>
                                    <Text note>{groups.member.length==1?groups.member.length+" Participant":groups.member.length+" Participants"} . . .</Text>
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
                                    <Text  onPress={() =>navigate('Event',{eventId:events.event._id})}>{events.event.title}</Text>
                                    <Text note>{events.event.description}</Text>
                                </Body>
                            </ListItem>
                        }>
                    </List>
                    ) 
                }
                if(data.getProfile.first_name){
                    name= data.getProfile.first_name+" "+data.getProfile.last_name ;
                }else{
                    name = data.getProfile.user.username;
                }

            }
            return(
                <Container  style={styles.container}>            
                    <View style={styles.containerWhite}>
                        <List>
                            <ListItem>
                            <Thumbnail large source={{ uri: data.getProfile.user.image_path }} />           
                            <Body style={styles.itemPad} >
                                <H3 style={styles.itemPad}>{name}</H3>
                                <Text style={styles.itemPadBottom} note>{data.getProfile.country}.{data.getProfile.state}</Text>
                                <Button  rounded info  onPress={() =>navigate('EditProfile')}>
                                    <Text>Edit Profile</Text>
                                </Button>
                            </Body> 
                           
                            </ListItem>
                        </List>
                    </View>
                    <Content>
                        <Text note style={styles.groupHeader}>MY GROUPS</Text>    
                        {groupList}
                        <Text note style={styles.groupHeader}>MY EVENTS</Text>
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
