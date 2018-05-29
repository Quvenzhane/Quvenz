import React, { Component } from 'react'
import { Image, View, Alert} from 'react-native'; 
import { Container, Content, List, ListItem, Body, Right, Thumbnail, Text, Tost } from 'native-base';
import styles from './style';
import globalColor from '../../config/app-colors'; 
import { Query } from "react-apollo";
import { GET_REQUESTS} from '../graph/queries/requestQueries';

ShowAlertDialog = () =>{
 
    Alert.alert(
        '',
        'Notification response',
        [
          {text: 'Accept', onPress: () => console.log('OK Pressed')},
          {text: 'Reject', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        // { cancelable: false }
      )
  }
  export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false
        };
    }
    render() {
        return (

            <Query query={GET_REQUESTS} fetchPolicy="network-only">
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
                    if(data.getRequests){ 
                        theList = (
                            <List dataArray={data.getRequests}
                            renderRow={(requestDetails) =>
                            <ListItem >
                                <Body>
                                    {requestDetails.group
                                        ?<Text note>You are invite to join {requestDetails.group.title} group</Text>
                                        :<Text note>You are invite to join {requestDetails.event.title} event</Text>}
                                    <Text>From {requestDetails.senderUser.profile
                                                ?requestDetails.senderUser.profile.first_name+" "+requestDetails.senderUser.profile.last_name
                                                :requestDetails.senderUser.username}</Text>
                                </Body>
                                <Text note onPress={ShowAlertDialog} style={globalColor.appDarkPrimayColor}>respond</Text>
                            </ListItem>
                            }>
                        </List>)
                    }
                }
                
                
                return(
                    <Container style={styles.container}>
                        <Content>
                            {theList}
                        </Content>
                    </Container>     
                )
            }}
            </Query>

        )
    }
}
