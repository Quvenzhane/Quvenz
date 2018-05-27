import React, { Component } from 'react'
import { Container, Content,Text, Item, View, Icon, Input, H3, Form, Button} from 'native-base';
import styles from './style'; 

export default class AddGroupMember extends Component {
  render() {
    return (
      <Container style={styles.container}>
          
          <H3 style={styles.header}>Add friends to group</H3>
          <Content style={styles.backgroundEdit}>
              <Text note>Search to add</Text>
              <Form>
                <View style={{paddingTop:15, paddingBottom:15 }}>
                    <Item rounded >
                    <Input placeholder='Search username or email' />
                    <Icon  name="send" />
                    </Item>
                </View>
              </Form>

              <Text style={{paddingTop:30 }} note>Invite by email</Text>
              <Form>
                <View style={{paddingTop:15, paddingBottom:15 }}>
                    <Item rounded >
                    <Input placeholder='Add email' />
                    <Icon  name="send" />
                    </Item>
                </View>
              </Form>
              <Text style={{paddingTop:30, paddingBottom:30 }} >Members in a group can add pictures, comments and like all events under that group</Text>
              <Button  full rounded info>
                   <Text>Share group link</Text>
              </Button>
          </Content>   
      </Container>
    )
  }
}
