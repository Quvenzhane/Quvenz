import React, { Component } from 'react'
import { Picker } from 'react-native'; 
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import styles from './style'; 

export default class CreateEvent extends Component {
    constructor(props){
        super(props);
        this.state = { language: "Pick a Group"};
      }

  render() {
    return (
    <Container style={styles.container}>
        <Content>
          <Form>
            <Picker
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Pick a Group" value="Family" />
                <Picker.Item label="Family" value="Family" />
                <Picker.Item label="Friends" value="js" />
                <Picker.Item label="Osun Festival" value="js" />
            </Picker>
            <Item floatingLabel>
              <Label>Event name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input />
            </Item>
            <Button block info style={styles.button}>
              <Text>Create Event</Text>
            </Button>
          </Form>
        </Content>
    </Container>
    )
  }
}
