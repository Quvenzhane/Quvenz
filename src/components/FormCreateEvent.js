import React, { Component } from 'react'
import {  View, Picker} from 'react-native'
import {Container, Content,  Form, Item, Input, Label, Button,Text } from 'native-base';

import styles from './../event/style'; 


export default class FormCreateEvent extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            group: "Pick a Group", title: "", description: "", loading: false, created: false,
            errorMessage: false 
          };
        
      }
      onInputTextChange = (text, type) => {
        this.setState({ [type]: text }); //console.log(this.state);
      }  
      doSubmit = () => {
        const { group, title, description } = this.state;
        console.log('submitting...')
       this.props.handleSubmit({title, description});
       this.props.iscreated && this.setState({title:'',description:''});
      } 
  
    
  render() {
    return (
        
    
        <Content>
            
            <Form>
                <Item>
                <Label>{this.props.iserror? this.props.iserror: ""} </Label>
                <Label>{this.props.iscreated? "created successfully": ""} </Label>
                </Item>

                <Picker
                    selectedValue={this.state.group}
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
                <Button block info style={styles.button} onPress={this.doSubmit} >
                <Text>Create Event</Text>
                </Button>
            </Form>
        </Content>
    )
  }
}