import React, { Component } from 'react'
import { Container, Content,Badge, Icon, View, Text} from 'native-base';
import styles from './style'; 

export default class GroupScreen extends Component {
  render() {
    return (
        <Container style={styles.container}>
            <Content>
                <View style={styles.metricsContainer}>
                    <Text>All Pictures</Text>
                    <Badge>
                        <Text>208</Text>
                    </Badge>
                    <Text>Events</Text>
                    <Badge success>
                        <Text>29</Text>
                    </Badge>
                </View> 
            </Content>
        </Container>
    )
  }
}
