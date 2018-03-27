import React, { Component } from 'react'
import { Picker } from 'react-native'; 
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import { Mutation } from "react-apollo";

import { ADD_EVENT} from '../graph/mutations/eventMutation';
import styles from './style'; 

export default class CreateEvent extends Component {
    constructor(props){
      super(props);
      this.state = { 
        group: "Pick a Group", title: "", description: "", loading: false, created: false,
        errorMessage: false 
      };
    }
    onInputTextChange = (text, type) => {
      this.setState({ [type]: text }); console.log(this.state);
    } 

  
  render() {
    return (
      <Mutation mutation={ADD_EVENT}>
      {(addEvent, {data, loading, error }) => (


    <Container style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Label>{this.state.errorMessage? this.state.errorMessage: ""} </Label>
              <Label>{this.state.created? "created successfully": ""} </Label>
            </Item>

            <Picker
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({group: itemValue})}>
                <Picker.Item label="Pick a Group" value="" />
                <Picker.Item label="Family" value="Family" />
                <Picker.Item label="Friends" value="Friends" />
                <Picker.Item label="Osun Festival" value="Festival" />
            </Picker>
            <Item floatingLabel>
              <Label>Event name</Label>
              <Input onChangeText={text => this.onInputTextChange(text, 'title')}
                  value={this.state.title} />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input onChangeText={text => this.onInputTextChange(text, 'description')} 
                  value={this.state.description} />
            </Item>
            <Button block info style={styles.button} onPress={e => {
              console.log('inside on press, this.state');
              console.log(JSON.stringify(this.state, null, 4));
              console.log('inside on press, this.props');
              console.log(JSON.stringify(this.props, null, 4));

              const { group, title, description } = this.state;
              addEvent({variables:
                {title, description}
              });
              if(loading) this.setState({loading: true});
              if(error) this.setState({errorMessage: 'an error occurred, try again'});

            }}
            >
              <Text>Create Event</Text>
            </Button>
          </Form>
        </Content>
    </Container>

    )}
    </Mutation>

    )
  }
}
