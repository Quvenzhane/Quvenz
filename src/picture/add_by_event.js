import React, { Component } from 'react';
import { Picker } from 'react-native'; 
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast} from 'native-base';
import styles from './style'; 
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import {ADD_PHOTO } from '../graph/mutations/photoMutation';
import { GET_EVENTS} from '../graph/queries/eventQueries';
import { GET_EVENTSCREEN} from '../graph/queries/eventScreenQueries';
import { GET_USER_PHOTO} from '../graph/queries/photoByUserQueries';


export default class AddPictureByItem extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            showToast: false,
            eventList:"",description:"", imageUrl:"",
            event:"", eventName:""
          };
        this.doSubmit = this.doSubmit.bind(this);
      }
      onInputTextChange = (text, type) => {
        this.setState({ [type]: text });
      } 
     
      doSubmit = (doAddPhoto, obj, e) => {
        if(this.state.event != ""){
          //temp
          var img = Math.floor(Math.random()*5)+1;
          this.state.imageUrl = "https://magbodo.com/asset/pixfam-images/event"+img+".jpg";

          const { imageUrl, event, description} = this.state;
          const {data,loading, error} = obj;
          doAddPhoto({variables: {imageUrl, event, description}}); 
    
        }else{
          Toast.show({
              text: "Aw! Check your input",
              type: "warning",
              duration: 4000
              });
        }
     
    } 

  render() {
    const { navigate } = this.props.navigation;
    this.state.event = this.props.navigation.getParam('eventId');
    this.state.eventName = this.props.navigation.getParam('eventName');
    const eventId = this.props.navigation.getParam('eventId');
    return (

        <Mutation mutation={ADD_PHOTO} refetchQueries={[ {query:GET_EVENTS}, {query:GET_EVENTSCREEN, variables:{eventId}} ]}>
        {(addPhoto, {data, loading, error }) => 
        (
            
            <Container  style={styles.container}>
                {loading && <Text>Loading...</Text>}
                {error && <Text>Error :( Please try again</Text>}
                {data &&  Toast.show({
                            text: "Image was successfuly added",
                            type: "success",
                            duration: 4000
                            })
                }
                {data && navigate('Event',{eventId:this.state.event})}
                <Content style={styles.backgroundEdit}>
                <Form>
                    <Text>Add pictures to {this.state.eventName}</Text>
                    <Item floatingLabel>
                        <Label>Description</Label>
                        <Input onChangeText={text => this.onInputTextChange(text, 'description')}
                            value={this.state.description} />
                    </Item>
                    <Button block rounded info style={styles.button} onPress={this.doSubmit.bind(this, addPhoto, {data,loading, error})}>
                        <Text>Add Pictures</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
        )}
        </Mutation> 

    )
  }
}
