import React, { Component } from 'react'
import { Image, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Badge, View, Icon, Toast} from 'native-base';
import { DeckSwiper, Card, CardItem, Thumbnail, Left, Body, H3, Fab, Button } from 'native-base';
import styles from './style'; 
// import CardViewEvent from './card_view_event'
import CardPicByUser from './card_pic_by_user'
import { Query } from "react-apollo";
import { GET_EVENTSCREEN} from '../graph/queries/eventScreenQueries';

export default class EventScreen extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false,
           eventDetail: null,
        };
    }
    loadDetails() {
        var cardDetails =null;
        return this.state.eventDetail.map(details => (

            <CardPicByUser username={details.user.profile!=null
                ?details.user.profile.first_name+" "+details.user.profile.last_name
                :details.user.username} 
            imageSourceProfile="1" theNav={this.props.navigation.navigate} />
         ))
    }

  render() {
    const { navigate } = this.props.navigation;
    const eventId = this.props.navigation.getParam('eventId');
    
    return (  
        <Query query={GET_EVENTSCREEN} variables={{ eventId }}>
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
                if(data){
                    if(data.getEvent.eventMember){ 
                         this.state.eventDetail = data.getEvent.eventMember;
                    }
                }

            return(    
                <Container style={styles.container}>
                    <View style={styles.metricsContainer}>
                        <Icon name="add" style={{paddingRight:15}}
                                    onPress={() =>navigate('CreateEvent')}/> 
                        <Text>  Pictures  </Text>
                        <Badge>
                            <Text>121</Text>
                        </Badge>
                        <Text onPress={() =>navigate('EventParticipant')}>  
                            {data.getEvent.eventMember.length==1?"Participant":"Participants"} </Text>
                        <Badge success>
                            <Text>{data.getEvent.eventMember.length}</Text>
                        </Badge>
                        
                    </View>

                    <Text style={{fontWeight:"500"}}>{data.getEvent.title}</Text> 
                    <Text note>{data.getEvent.description}</Text>
                    <Content >
                        {this.loadDetails()}
                    </Content>  
                    
                    <Fab
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() =>navigate('AddPicture')}>
                        <Icon name="add" />
                    </Fab>  
                </Container>)

            }}
        </Query>
    )
  }
}
