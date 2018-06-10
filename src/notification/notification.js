import React, { Component } from 'react'
import { Image, View, Alert} from 'react-native'; 
import { Container, Content, List, ListItem, Body, Right, Thumbnail, Text, Toast, Button } from 'native-base';
import styles from './style';
import globalColor from '../../config/app-colors'; 
import { graphql} from 'react-apollo';
import { Query } from "react-apollo";
import { GET_REQUESTS} from '../graph/queries/requestQueries';
import { RESPOND_2_REQUEST } from '../graph/mutations/respond2RequestMutation';

  class Notification extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false,
           requestId: null, responseType: null
        };
    }

    showAlertDialog = (requestID) =>{
        Alert.alert(
            '',
            'Notification response',
            [
              {text: 'Accept', onPress: this.doSubmit.bind(this, requestID, "Accept")},
              {text: 'Reject', onPress: this.doSubmit.bind(this, requestID, "Reject"), style: 'cancel'},
            ],
            // { cancelable: false }
          )
      }
    
    doSubmit= async (requestID, userResponse)=> {
        this.state.requestId = requestID;
        this.state.responseType = userResponse;
        const {requestId, responseType} = this.state

        try {
            const {data} = await this.props.mutate({variables:{requestId, responseType}, refetchQueries:[{query:GET_REQUESTS}]} )
            if(data.respond2Request.status != null){
                Toast.show({
                    text: "You have "+data.respond2Request.status+" the request",
                    type: "success",
                    duration: 4000
                  });
            }else{
                Toast.show({
                    text: "Some strange went wrong",
                    type: "warning",
                    duration: 4000
                  });
            }
            
        }catch(error){
            Toast.show({
                text: error.message,
                buttonText: 'Okay',
                type: "danger",
                duration: 4000
              });
              throw error;
        }
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
                if(data){
                    if(data.getRequests.length > 0){ 
                        theList = (
                            <List dataArray={data.getRequests}
                            renderRow={(requestDetails) =>
                            <ListItem >
                                <Body>
                                    {requestDetails.group
                                        ?<Text note>You are invite to join {requestDetails.group.title} group</Text>
                                        :<Text note>{requestDetails.requestType == "Invite"
                                                    ?"An invite for you to join"
                                                    :"Someone request to join"} {requestDetails.event.title +" event"}</Text>
                                    }
                                    <Text>From {requestDetails.senderUser.profile.length > 0
                                                ?requestDetails.senderUser.profile.first_name+" "+requestDetails.senderUser.profile.last_name
                                                :requestDetails.senderUser.username}</Text>
                                </Body>
                                <Text note onPress={this.showAlertDialog.bind(this, requestDetails._id)} style={globalColor.appDarkPrimayColor}>respond</Text>
                            </ListItem>
                            }>
                        </List>)
                    }else{
                        Toast.show({
                            text: "You have no pending request",
                            duration: 4000
                            });
                            return <Text> Aw! You have no pending request</Text>;
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

export default graphql(RESPOND_2_REQUEST) ( Notification);

