import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import styles from './style'; 

export default class CreateGroup extends Component {
  
  render() {
    return (
        <Container style={styles.container}>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Group name</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Description</Label>
                <Input />
              </Item>
              <Button block style={styles.button}>
                <Text>Create Group</Text>
              </Button>
            </Form>
          </Content>
        </Container>
    )
  }
}
