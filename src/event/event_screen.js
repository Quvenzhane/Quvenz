import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text, Badge, View, Icon} from 'native-base';
import styles from './style'; 

export default class EventScreen extends Component {
  render() {
    return (
        <Container style={styles.container}>
            <Content>
                <View style={styles.metricsContainer}>
                    <Text>Pictures</Text>
                    <Badge>
                        <Text>121</Text>
                    </Badge>
                    <Text>Participant</Text>
                    <Badge success>
                        <Text>27</Text>
                    </Badge>
                    <Text>Tag</Text>
                    <Badge primary>
                        <Text>12</Text>
                    </Badge>
                    <Icon name="add" style={{paddingRight:15}}
                                onPress={() =>navigate('CreateEvent')}/> 
                </View> 
            </Content>
        </Container>
    )
  }
}
