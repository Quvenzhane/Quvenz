import React, { Component } from 'react'
import { Alert} from 'react-native'; 
import { Container, Content, View,List, ListItem, Body, Left, Thumbnail, Text, Toast } from 'native-base';
import styles from './style';
import globalColor from '../../config/app-colors'; 
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { GET_REQUESTS} from '../graph/queries/requestQueries';
import { RESPOND_2_REQUEST } from '../graph/mutations/respond2RequestMutation';
import { CLEAR_COMMENT_NOTIFICATION } from '../graph/mutations/clearCommentNotificationMutation';

export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false,
           requestId: null, responseType: null
        };
    }

    showAlertRequestDialog = (doRequest, requestID, obj) =>{
        Alert.alert(
            '',
            'Notification response',
            [
              {text: 'Accept', onPress: this.doSubmitRequest.bind(this,doRequest, requestID, obj, "Accept")},
              {text: 'Reject', onPress: this.doSubmitRequest.bind(this,doRequest, requestID, obj, "Reject"), style: 'cancel'},
            ],
          )
    }
      
    showAlertCommentDialog = (doClearComment, requestID,photoID, photoUrl) =>{
        Alert.alert(
            '',
            'Comment notification',
            [
              {text: 'View', onPress: this.doClearNofication.bind(this,doClearComment, requestID, photoID, photoUrl, "View")},
              {text: 'Clear', onPress: this.doClearNofication.bind(this,doClearComment, requestID, photoID, photoUrl, "Clear"), style: 'cancel'},
            ],
            // { cancelable: false }
          )
    }
    
      doSubmitRequest(doRequest, requestID, obj, userResponse) {
        this.state.requestId = requestID;
        this.state.responseType = userResponse;
        const {requestId, responseType} = this.state
        const {data,loading, error} = obj;
        doRequest({variables: {requestId, responseType}});
        console.log(obj)
console.log(data)
        // if(data.respond2Request.status != null){
        //     Toast.show({
        //         text: "You have "+data.respond2Request.status+" the request",
        //         type: "success",
        //         duration: 4000
        //         });
        // }else{
        //     Toast.show({
        //         text: "Some strange went wrong",
        //         type: "warning",
        //         duration: 4000
        //         });
        // }
        // if(error){
        //     Toast.show({
        //         text: error.message,
        //         buttonText: 'Okay',
        //         type: "danger",
        //         duration: 4000
        //       });
        //       throw error;
        // }
    }

    doClearNofication(doClearComment, requestID,photoID, photoUrl, userResponse) {
        if(userResponse=="View"){
            console.log(photoID);
           this.props.navigation.navigate("EventPicComment",{photo:photoID, imageSource:photoUrl});
        }else{
            this.state.requestId = requestID;
            const {requestId} = this.state
            doClearComment({variables: {requestId}});
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
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail small source={{ uri: requestDetails.senderUser.image_path}}/>
                                </Left>
                                <Body>

                                    {requestDetails.group
                                        ?<Text note>You are invite to join {requestDetails.group.title} group</Text>:null}
                                    {requestDetails.event
                                        ?<Text note>{requestDetails.requestType == "Invite"
                                                    ?"An invite for you to join"
                                                    :"Someone request to join"} {requestDetails.event.title +" event"}</Text>
                                        :null          
                                    }
                                    {requestDetails.photo
                                        ?<Text note>Fresh comment on your picture</Text>:null}
                                    <Text>From {requestDetails.senderUser.profile
                                                ?requestDetails.senderUser.profile.first_name+" "+requestDetails.senderUser.profile.last_name
                                                :requestDetails.senderUser.username}</Text>
                                </Body>
                                {requestDetails.photo
                                    ?<Mutation mutation={CLEAR_COMMENT_NOTIFICATION} refetchQueries={[ {query:GET_REQUESTS}]}>
                                    {(doClearComment, {data, loading, error }) => 
                                    (   
                                        <View>
                                            {data?data.clearCommentNotification.status == "Cleared"
                                                    ?Toast.show({
                                                        text: "Comment notification cleared",
                                                        type: "success",
                                                        duration: 4000
                                                        })
                                                    :Toast.show({
                                                        text: "Some strange went wrong",
                                                        type: "warning",
                                                        duration: 4000
                                                        })
                                                :null        
                                            }
                                            {error &&
                                                Toast.show({
                                                    text: error.message,
                                                    buttonText: 'Okay',
                                                    type: "danger",
                                                    duration: 4000
                                                })
                                            }  
                                            <Text note 
                                                onPress={this.showAlertCommentDialog.bind(this, 
                                                doClearComment, 
                                                requestDetails._id, requestDetails.photo._id, 
                                                requestDetails.photo.image_url)} 
                                                style={globalColor.appDarkPrimayColor}>act</Text>
                                        </View>
                                    )}                                
                                    </Mutation> 
                                    
            
                                :<Mutation mutation={RESPOND_2_REQUEST} refetchQueries={[ {query:GET_REQUESTS}]}>
                                {(doRequest, {data, loading, error }) => 
                                (   
                                    <View>
                                        {data?data.respond2Request.status != null
                                                ?Toast.show({
                                                    text: "You have "+data.respond2Request.status+" the request",
                                                    type: "success",
                                                    duration: 4000
                                                    })
                                                :Toast.show({
                                                    text: "Some strange went wrong",
                                                    type: "warning",
                                                    duration: 4000
                                                    })
                                            :null        
                                        }
                                        {error &&
                                            Toast.show({
                                                text: error.message,
                                                buttonText: 'Okay',
                                                type: "danger",
                                                duration: 4000
                                            })
                                        }  
                                        <Text note 
                                            onPress={this.showAlertRequestDialog.bind(this, 
                                            doRequest, requestDetails._id, {data, loading, error })} 
                                            style={globalColor.appDarkPrimayColor}>respond</Text>
                                    </View>
                                )}                                
                                </Mutation> 
                                }    
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

// export default graphql(RESPOND_2_REQUEST) ( Notification);

