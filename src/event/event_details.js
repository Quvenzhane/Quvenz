import React, { Component } from 'react'
import { Container, Content,Text, Badge, View, Icon, Fab, H3} from 'native-base';
import CardViewEvent from './card_view_event'
import styles from './style'; 

export default class EventDetails extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container style={styles.container}>
       
        <View style={styles.headingContainer}>
            <H3 style={styles.header}>Soduko Birthday</H3> 
            <Text note>Pictures taken by Mayowa</Text>
        </View>

        <Content style={styles.eventScreenContainer}>
            <CardViewEvent theNav={navigate} imageSource="1" likes="101" comments="2" imageSourceProfile="2" username="Mayowa"/>
            <CardViewEvent theNav={navigate} imageSource="2" likes="56" comments="12" imageSourceProfile="2"  username="Mayowa"/>
            <CardViewEvent theNav={navigate} imageSource="3" likes="346" comments="8" imageSourceProfile="2" username="Mayowa"/> 
            <CardViewEvent theNav={navigate} imageSource="4" likes="5" comments="4" imageSourceProfile="2"  username="Mayowa"/>            
        </Content>
        {/* <Fab
            style={{ backgroundColor: '#2980b9' }}
            position="bottomRight"
            onPress={() =>navigate('EventPicDetails')}>
            <Icon name="add" />
        </Fab> */}
     </Container>       
    )
  }
}
