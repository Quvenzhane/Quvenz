import React, { Component } from 'react'
import { Container, Content,Text, Badge, View, Icon, Fab, H3,Toast, Thumbnail, Body, List,ListItem} from 'native-base';
import CardViewEvent from './card_view_event'
import styles from './style'; 
import { Query } from "react-apollo";
import { GET_USER_PHOTO} from '../graph/queries/photoByUserQueries';
import { AsyncStorage } from 'react-native';

export default class EventDetails extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false,
           userPhotoDetails: null,
           username: "",profileImage:null,
           email:"no@mail.com"
        };
    }

    async componentWillMount() {
        try 
        {    
             await AsyncStorage.setItem('teststuff1','testvalue1');
             this.state.email = await AsyncStorage.getItem('@pixfam_email');
        } catch (error) {
            console.log('error: '+error.message);  
        } 
    };
    loadDetails() {   

            return this.state.userPhotoDetails.map(details => {

            var photolikes = details.photoLike;
            var photoIsLikedByUser = false;
            for(i=0; i < photolikes.length; i++){
                const element =  photolikes[i];
                if(this.state.email == element.user.email){
                    photoIsLikedByUser = true;
                    break;
                }
            }
            const returnBack=  <CardViewEvent theNav={this.props.navigation.navigate} 
                picCreatorUsername={this.state.username}
                imageSource={details.image_url}
                photo={details._id}
                description={details.description}
                view={details.view}
                dateCreated = {this.formatDate(details.createdAt)}
                likes={details.photoLike.length}
                isLikedByUser ={photoIsLikedByUser}
                lastComment ={details.photoComment.length !=0?details.photoComment[details.photoComment.length-1].comment:null }
                lastCommentFromUser ={details.photoComment.length !=0?details.photoComment[details.photoComment.length-1].user.username:null }
                comments={details.photoComment.length}
                userId ={this.props.navigation.getParam('userId')}
                eventId ={this.props.navigation.getParam('eventId')}
                />

            return returnBack;
        })
    }

    formatDate(datetime) {
        var theEvent = new Date(datetime);
        now = new Date();
        var timeElapsed = (now - theEvent) / 1000;

        var seconds    = timeElapsed ;
        var minutes    = Math.floor(timeElapsed / 60 );
        var hours      = Math.floor(timeElapsed / 3600);
        var days       = Math.floor(timeElapsed / 86400 );
        var weeks      = Math.floor(timeElapsed / 604800);
        var months     = Math.floor(timeElapsed / 2600640 );
        var years      = Math.floor(timeElapsed / 31207680 );
        
        if (seconds <= 60) {return "MOMENTS ago";}
        if (minutes <= 60) {if(minutes ==1){return "A MIN AGO"}else{return minutes+" MINS AGO";}}
        if (hours <= 24) {if(hours == 1){return "AN HOUR AGO"}else{return hours+ " HOURS AGO";}}
        if (days <= 7) {if(days == 1){return "A DAY AGO"}else{return days+ " DAYS AGO";}}
        if (weeks <= 4.3) {if(weeks == 1){return "A WEEK AGO"}else{return weeks+ " WEEKS AGO";}}
        if (months <= 12) {if(months == 1){return "A MONTH AGo"}else{return months+ " MONTHS AGO";}}
        else {if(years == 1){return "A YEAR AGO"}else{return years+ " YEARS AGO";}}
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
                <Container style={styles.containerCardByPic}>
            
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
