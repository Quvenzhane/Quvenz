import React, { Component } from 'react'
import { Container, Content,Text, Badge, View, Icon, Fab, H3,Toast, Thumbnail, Body, List,ListItem} from 'native-base';
import CardViewEvent from './card_view_event'
import styles from './style'; 
import { Query } from "react-apollo";
import { GET_USER_PHOTO} from '../graph/queries/photoByUserQueries';

export default class EventDetails extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false,
           userPhotoDetails: null,
           username: "",profileImage:null
        };
    }
    loadDetails() {   
        return this.state.userPhotoDetails.map(details => (
            // var lastComment = details.photoComment[details.photoComment.length-1].user.username
            <CardViewEvent theNav={this.props.navigation.navigate} 
                imageSource={details.image_url}
                photo={details._id}
                likes="101"
                lastComment ={details.photoComment.length !=0?details.photoComment[details.photoComment.length-1].comment:null }
                lastCommentFromUser ={details.photoComment.length !=0?details.photoComment[details.photoComment.length-1].user.username:null }
                comments={details.photoComment.length}
                userId ={this.props.navigation.getParam('userId')}
                eventId ={this.props.navigation.getParam('eventId')}
                />
         ))
    }
  render() {
    const { navigate } = this.props.navigation;
    const eventId = this.props.navigation.getParam('eventId');
    const eventTitle = this.props.navigation.getParam('eventTitle');
    const userId = this.props.navigation.getParam('userId');


    return (
        <Query query={GET_USER_PHOTO} variables={{ userId, eventId }} fetchPolicy="network-only">
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
                if(data.getUserPhotos){ 
                    this.state.userPhotoDetails = data.getUserPhotos;
                    var photoData =  data.getUserPhotos;
                   console.log(photoData[0])
                   try{
                        this.state.profileImage =photoData[0].user.image_path
                        if(photoData[0].user.profile.length > 0){
                            this.state.username= photoData[0].user.profile.first_name+" "+photoData[0].user.profile.last_name;
                        }else{
                            this.state.username =photoData[0].user.username;
                        }
                   }catch(err){
                    Toast.show({
                        text:"Event ablum is empty",
                        buttonText: 'Okay',
                        type: "warning",
                        duration: 4000
                        });
                   }
                   
                } 
            }

            return(    
                <Container style={styles.container}>
            
                    <List>
                        <ListItem>
                        <Thumbnail source={{ uri: this.state.profileImage}}/>
                        <Body style={{padding:5}} >
                            <H3>{eventTitle}</H3> 
                            <Text note>            
                                Pictures by {this.state.username}
                            </Text>
                        </Body> 
                        </ListItem>
                    </List>

                    <Content style={styles.eventScreenContainer}>
                        {this.loadDetails()}
                    </Content>
                </Container> 
            )
        }}
        </Query>
    )
  }
}
