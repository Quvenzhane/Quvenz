import React, { Component } from 'react'
import { Image, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Badge, View, Icon, Toast} from 'native-base';
import { DeckSwiper, Card, CardItem, Thumbnail, Left, Body, H3, Fab, Button } from 'native-base';
import styles from './style'; 
import { AsyncStorage } from 'react-native';
// import CardViewEvent from './card_view_event'
// import CardPicByUser from './card_pic_by_user'
import { Query } from "react-apollo";
import { GET_EVENTSCREEN} from '../graph/queries/eventScreenQueries';

export default class EventScreen extends Component {

    constructor(props){
        super(props);
        this.state = { 
           showToast: false,
           eventDetail: null,
           email:"no@mail.com",
           isAMember: false

        };
    }

    async componentWillMount() {
        try 
        {    
            console.log('componentWillMount : ...')
             await AsyncStorage.setItem('teststuff1','testvalue1');
             this.state.email = await AsyncStorage.getItem('@pixfam_email');
             console.log('there is email: '+  this.state.email );
        } catch (error) {
            console.log('error: '+error.message);  
        } 
    };


   
    loadDetails(eventId, eventTitle) {   
        return this.state.eventDetail.map(details => (

            <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: details.user.image_path }} />
            </Left>
            <Body>
                <Text onPress={() =>this.props.navigation.navigate('EventDetails',{userId:details.user._id, eventId:eventId,eventTitle:eventTitle})}>
                    {details.user.profile
                    ?details.user.profile.first_name+" "+details.user.profile.last_name
                    :details.user.username}
                </Text>
                <Text note onPress={() =>this.props.navigation.navigate('EventDetails',{userId:details.user._id, eventId:eventId,eventTitle:eventTitle})}>10 likes | 3 Comments  
                    | {details.photo.length > 1?details.photo.length+" pictures":details.photo.length+" picture"}
                </Text>
            </Body>
            {details.user.email == this.state.email? this.state.isAMember = true :""}
            </ListItem>
         ))
    }
    getTotalPictures(){
        var  myEvent = this.state.eventDetail;
        var pictures =0;
        if( myEvent){
            for (let index = 0; index <  myEvent.length; index++) {
                const element =  myEvent[index];
                pictures = parseInt(pictures) + parseInt(element.photo.length)
            }
           return pictures
        }
    }

  render() {
    const { navigate } = this.props.navigation;
    const eventId = this.props.navigation.getParam('eventId');
    
    return (  
        <Query query={GET_EVENTSCREEN} variables={{ eventId }} pollInterval={60000}>
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
                        return <Text> Whoops! Something got bursted</Text>;
                }
                if(data){ console.log(data)
                    if(data.getEvent.eventMember){ 
                         this.state.eventDetail = data.getEvent.eventMember;
                    }
                }

            return(    
                <Container style={styles.container}>
                    <View style={styles.metricsContainer}>
                       
                        <Text> Pictures  </Text>
                        <Badge>
                            <Text>{this.getTotalPictures()}</Text>
                        </Badge>
                        <Text onPress={() =>navigate('EventParticipant',{eventId:eventId})}>  
                            {data.getEvent.eventMember.length==1?"  Participant":"  Participants"} </Text>
                        <Badge success>
                            <Text>{data.getEvent.eventMember.length}</Text>
                        </Badge>
                        
                    </View>
                    <H3 style={{fontWeight:"300", paddingBottom:10, paddingTop:10}}>{data.getEvent.title}</H3> 
                    <Text note>Created by : {data.getEvent.group.user.username}</Text>
                  
                    <Content >
                        <List>
                           {this.loadDetails(eventId, data.getEvent.title)}
                        </List>
                    </Content>  
                    
                    <Fab
                        style={{ backgroundColor: '#FF6600' }}
                        position="bottomRight"
                        onPress={() =>navigate('AddPictureByEvent',{eventName:data.getEvent.title, eventId:eventId})}>
                        <Icon name="add" />
                    </Fab>  
                </Container>)

            }}
        </Query>
    )
  }
}
