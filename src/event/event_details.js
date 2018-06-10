import React, { Component } from 'react'
import { Container, Content,Text, Badge, View, Icon, Fab, H3,Toast} from 'native-base';
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
           username: ""
        };
    }
    loadDetails() {   
        return this.state.userPhotoDetails.map(details => (
            <CardViewEvent theNav={this.props.navigation.navigate} 
                imageSource={details.image_url}
                likes="101" 
                comments="2" 
                imageSourceProfile={details.user.image_path} 
                username={this.state.username} />
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
            
                    <View style={styles.headingContainer}>
                        <H3 style={styles.header}>{eventTitle}</H3> 
                        <Text note>Pictures taken by {this.state.username}</Text>
                    </View>

                    <Content style={styles.eventScreenContainer}>
                        {this.loadDetails()}
                    </Content>
                    {/* <Fab
                        style={{ backgroundColor: '#2980b9' }}
                        position="bottomRight"
                        onPress={() =>navigate('EventPicDetails')}>
                        <Icon name="add" />
                    </Fab> */}
                </Container> 
            )
        }}
        </Query>
    )
  }
}
