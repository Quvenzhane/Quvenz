import React, { Component } from 'react'
import { Container, Content,Text, Badge, View, Icon, Fab} from 'native-base';
import CardViewEvent from './card_view_event'
import styles from './style'; 

export default class EventDetails extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
        <View style={styles.metricsContainer}>
                <Text>Pictures</Text>
                <Badge>
                    <Text>121</Text>
                </Badge>
                <Text>Participant</Text>
                <Badge success>
                    <Text>27</Text>
                </Badge>
                <Icon name="add" style={{paddingRight:15}}
                            onPress={() =>navigate('CreateEvent')}/> 
        </View>
        <Text style={{padding:10, fontWeight:"900"}}>Soduko Birthday</Text> 

        <Content style={styles.eventScreenContainer}>
            <CardViewEvent imageSource="1" likes="101" imageSourceProfile="1" username="Mayowa"/>
            <CardViewEvent imageSource="2" likes="56" imageSourceProfile="2"  username="John"/>
            <CardViewEvent imageSource="3" likes="346" imageSourceProfile="2" username="John"/> 
            <CardViewEvent imageSource="4" likes="5" imageSourceProfile="3"  username="Michel"/>            
        </Content>
        <Fab
            style={{ backgroundColor: '#2980b9' }}
            position="bottomRight"
            onPress={() =>navigate('EventPicDetails')}>
            <Icon name="add" />
        </Fab>
     </Container>       
    )
  }
}
