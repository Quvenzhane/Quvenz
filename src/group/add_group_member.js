import React, { Component } from 'react'
import { Container, Content,Text, Item, View, Icon, Input, H3, Form, Button} from 'native-base';
import styles from './style'; 

export default class AddGroupMember extends Component {
  render() {
    return (
      <Container style={styles.container}>
          <Content>
              <H3 style={{paddingBottom:20}} style={styles.header}>Expand your group</H3>
              <Text note>Search app to add friend</Text>
              <Form>
                <View style={{paddingTop:15, paddingBottom:15 }}>
                    <Item rounded >
                    <Input placeholder='Search username or email' />
                    <Icon  name="send" />
                    </Item>
                </View>
              </Form>

              <Text style={{paddingTop:30 }} note>Add friend's email to invite</Text>
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
