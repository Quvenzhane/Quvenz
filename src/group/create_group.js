import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button,Text,Toast } from 'native-base';
import { graphql } from "react-apollo";
import styles from './style'; 
import { Mutation } from "react-apollo";
import {ADD_GROUP } from '../graph/mutations/groupMutation';

export default class CreateGroup extends Component {
  constructor(props){
    super(props); 
    this.state = {
      title: "", description: "",
      showToast: false
    };
    this.doSubmit = this.doSubmit.bind(this);
  }

  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
    //this.state.showToast = false;
  } 
 
  doSubmit = (doAddGroup, obj, e) => {
    if(this.state.title != ""){
      const { title, description } = this.state;
      const {data,loading, error} = obj;
     doAddGroup({variables: {title, description}}); 
     this.state.title=""; 
     this.state.description="";

    }else{
      Toast.show({
          text: "Aw! Provide Group title",
          type: "warning",
          duration: 4000
          });
    }
 
} 

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Mutation mutation={ADD_GROUP}>
      {(addGroup, {data, loading, error }) => 
      (
       
        <Container style={styles.container}>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error :( Please try again</Text>}
            {data &&  Toast.show({
                        text: "Group was successfuly created",
                        type: "success",
                        duration: 4000
                        })
            }
            
            <Text note style={{padding:5}}>Create a group to organise similar events</Text>

            <Content style={styles.backgroundEdit}>
              <Form >
                <Item floatingLabel>
                  <Label>Group name</Label>
                  <Input onChangeText={text => this.onInputTextChange(text, 'title')}
                    value={this.state.title} />
                </Item>
                <Item floatingLabel last>
                  <Label>Description</Label>
                  <Input onChangeText={text => this.onInputTextChange(text, 'description')} 
                    value={this.state.description}/>
                </Item>
                <Button block rounded info style={styles.button} onPress={this.doSubmit.bind(this, addGroup, {data,loading, error})}>
                  <Text>Create Group</Text>
                </Button>
              </Form>
            
            </Content>
        </Container>
      )}
      </Mutation> 
    )
  }
}

