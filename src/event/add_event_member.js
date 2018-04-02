import React, { Component } from 'react'
import { Container, Content,Text, Item, View, Icon, Input, H3, Form, Button} from 'native-base';
import styles from './style'; 

export default class AddEventMember extends Component {
  render() {
    return (
      <Container style={styles.container}>
          <Content>
              <H3 style={styles.header}>Expand Event members</H3>
              <Text style={{paddingBottom:15}}>Members you add to event, do not have access to its group events </Text>
              <Text note >Search app to add friend</Text>
              <Form>
                <View style={{paddingTop:15, paddingBottom:15 }}>
                    <Item rounded >
                    <Input placeholder='Search username or email' />
                    <Icon  name="send" />
                    </Item>
                </View>
              </Form>

              <Text style={{paddingTop:13 }} note>Add friend's email to invite</Text>
              <Form>
                <View style={{paddingTop:15, paddingBottom:15 }}>
                    <Item rounded >
                    <Input placeholder='Add email' />
                    <Icon  name="send" />
                    </Item>
                </View>
              </Form>

             <H3 style={{paddingBottom:20}} style={styles.header}>Share Event with the world</H3>
              <Text style={{paddingBottom:30 }} >Invited users to only view pictures, comments, but they can like your pictures</Text>
              <Button  full rounded info>
                   <Text>Share event link</Text>
              </Button>
          </Content>   
      </Container>
    )
  }
}
