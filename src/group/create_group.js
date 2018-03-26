import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import { graphql } from "react-apollo";
import styles from './style'; 

import {ADD_GROUP } from '../graph/mutations/groupMutation';

class CreateGroup extends Component {
  constructor(props){
    super(props);
    this.initialState = 
    this.state = {
      title: "", description: "", loading: false, created: false,
      errorMessage: false
    };

  }

  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
   // console.log(this.state);
  } 
  onCreatePress = async () => {
    this.setState({ loading: true });
    console.log('this.state in oncreatepress: ',this.state);
    const { title, description } = this.state;
    try 
    {
      const resp = await this.props.mutate({
        variables: {title, description}
      });
      console.log('resp: ');
      console.log(JSON.stringify(resp, null, 4))
      const data = resp.data;
      console.log(data)
      this.setState({ loading: false });
      this.setState({created: true}); 
      this.setState({title:"", description: "", errorMessage:""});     
    } catch (error) 
    {
      console.log('error in oncreate: ',error);
      this.setState({ loading: false });
      this.setState({created: false}); 
      const responseError = error.message.substring(error.message.lastIndexOf(':')+1);
      this.setState({errorMessage: responseError, created: false});
      console.log(JSON.stringify(error, null, 4));

      //this.setState({errorMessage: error.message});
      //throw error;
    }
}


   // const { email, password } = this.state;
  render() {
    const theError = this.state.errorMessage;
    const success = this.state.created;
    return (
        <Container style={styles.container}>
          <Content>
            <Form>
              <Item>
                <Label>{theError? theError: ""} </Label>
                <Label>{success? "created successfully": ""} </Label>
              </Item>
              <Item floatingLabel>
                <Label>Group name1</Label>
                <Input onChangeText={text => this.onInputTextChange(text, 'title')}
                  value={this.state.title} />
              </Item>
              <Item floatingLabel last>
                <Label>Description</Label>
                <Input onChangeText={text => this.onInputTextChange(text, 'description')} 
                  value={this.state.description}/>
              </Item>
              <Button block style={styles.button} onPress={this.onCreatePress}>
                <Text>Create Group</Text>
              </Button>
            </Form>
          </Content>
        </Container>
    )
  }
}

export default graphql(ADD_GROUP)( CreateGroup);
