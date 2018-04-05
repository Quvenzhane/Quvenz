import React, { Component } from 'react'
import { Image, ScrollView} from 'react-native';
import { Container, Content, List, ListItem, Text, Badge, View, Icon} from 'native-base';
import { DeckSwiper, Card, CardItem, Thumbnail, Left, Body, H3, Fab, Button } from 'native-base';
import styles from './style'; 
// import CardViewEvent from './card_view_event'
import CardPicByUser from './card_pic_by_user'

export default class EventScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (      
        <Container style={styles.container}>
            <View style={styles.metricsContainer}>
                <Icon name="add" style={{paddingRight:15}}
                            onPress={() =>navigate('CreateEvent')}/> 
                <Text>  Pictures  </Text>
                <Badge>
                    <Text>121</Text>
                </Badge>
                <Text onPress={() =>navigate('EventParticipant')}>  Participants </Text>
                <Badge success>
                    <Text>20</Text>
                </Badge>
                
            </View>

           <Text style={{padding:10, fontWeight:"900"}}>Soduko Birthday</Text> 
            <Content >
                 <CardPicByUser username="Johnsons" imageSourceProfile="1" theNav={navigate} />
                 <CardPicByUser username="Obi3003" imageSourceProfile="3" theNav={navigate}/> 
                 <CardPicByUser username="Obi3003" imageSourceProfile="3" theNav={navigate}/> 
                 <CardPicByUser username="Kennyx" imageSourceProfile="2" theNav={navigate}/>          
            </Content>  
            
            <Fab
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() =>navigate('AddPicture')}>
                <Icon name="add" />
            </Fab>  
        </Container>
    )
  }
}
