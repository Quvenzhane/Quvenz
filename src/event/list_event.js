import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon, Button, Body, Toast} from 'native-base';
import { Right, Left} from 'native-base';

import styles from './style'; 
import globalColor from '../../config/app-colors'; 
import { Query } from "react-apollo";
import { GET_USER_EVENTS} from '../graph/queries/eventListQueries';


export default class ListEvent extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false
        };
    }
  
  render() {
    const { navigate } = this.props.navigation;
    return (

        <Query query={GET_USER_EVENTS}>
            {({ loading, error, data }) => 
            { 
                var theList = null;
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
                if(data){ console.log('there is data');
                if(data.getUserEvents){ 
                    theList = (
                        <List dataArray={data.getUserEvents}
                        renderRow={(eventMembers) =>
                         <ListItem>
                            {eventMembers.event.e_type=="Private"?<Icon name="lock" style={{color:"gray"}}/>:<Icon name="people" style={{color:"gray"}}/>}
                            <Body>
                                <Text onPress={() =>navigate('Event',{eventId:eventMembers.event._id})}>{eventMembers.event.title}</Text>
                                <Text note style={{fontSize:10}}>{eventMembers.event.description}</Text>
                                <Text note>{eventMembers.event.photo.length > 1?
                                    eventMembers.event.photo.length+" pictures":
                                    eventMembers.event.photo.length+" picture"}</Text>
                            </Body>
                            {eventMembers.event.user_type=="Admin"
                                ?<Text note style={globalColor.appDarkPrimayColor} onPress={() =>navigate('AddEventParticipant',{eventId:eventMembers.event._id, eventTitle:eventMembers.event.title})}>share</Text>
                                :<Text></Text>}
                        </ListItem>
                        }>
                    </List>)
                }
            }

                return(   
                    
                    <Container style={styles.container}>
                        <Content>
                            <View style={styles.listHeader}> 
                            <Icon name="add" style={{paddingRight:15}} onPress={() =>navigate('CreateEvent')}/>
                                <H3 style={styles.header}>
                                      Followed Events
                                </H3>
                            </View>  
                            {theList}
                        </Content>
                    </Container>
                )
            }}
        </Query>
    )
    
  }
}