import React, { Component } from 'react';
import { Picker, Keyboard } from 'react-native'; 
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast} from 'native-base';
import styles from './style'; 
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import {ADD_PHOTO } from '../graph/mutations/photoMutation';
import { GET_USER_EVENTS} from '../graph/queries/eventListQueries';
import { GET_EVENTSCREEN} from '../graph/queries/eventScreenQueries';
// import { GET_USER_PHOTO} from '../graph/queries/photoByUserQueries';


export default class AddPictureByEventList extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            showToast: false,
            eventList:"", event:"",description:"", imageUrl:""
          };
        this.doSubmit = this.doSubmit.bind(this);
      }
      onInputTextChange = (text, type) => {
        this.setState({ [type]: text });
      } 
     
      loadEventList() {
        return this.state.eventList.map(events => (
            <Picker.Item label={events.event.title} value={events.event._id} />
         ))
      }
      doSubmit = (doAddPhoto, obj, e) => {
        Keyboard.dismiss();
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

    return (
    
        <Query query={GET_USER_EVENTS}>
            {({ loading, error, data }) => 
            { 
                var theList = null;
                if (loading) return <Text> Loading...</Text>;
                if (error){
                    Toast.show({
                        text: error.message,
                        buttonText: 'Okay',
                        type: "danger",
                        duration: 4000
                        });
                        return <Text> Whoops! Something got broken</Text>;
                }
                if(data){
                    if(data.getUserEvents){ 
                        this.state.eventList = data.getUserEvents;
                   }
                }
            return(
                <Mutation mutation={ADD_PHOTO} refetchQueries={[ {query:GET_USER_EVENTS}]}>
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
                            <Picker
                                selectedValue={this.state.event}
                                onValueChange={(itemValue, itemIndex) => this.setState({event: itemValue})}>
                                <Picker.Item label="Select Event" />
                                {this.loadEventList()}
                            </Picker>
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
        }}
        </Query>

    )
  }
}
