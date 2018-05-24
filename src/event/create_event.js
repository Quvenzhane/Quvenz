import React, { Component } from 'react'
import {  View, Text,ImageBackground} from 'react-native'

import { Mutation } from "react-apollo";
import { Container, Content } from 'native-base';


import { ADD_EVENT} from '../graph/mutations/eventMutation';
import { GET_EVENTS} from '../graph/queries/eventQueries';
import styles from './style'; 
import FormCreateEvent from '../components/FormCreateEvent';

export default class CreateEvent extends Component {
    constructor(props){
      super(props);
      this.state = { 
     
      };
      this.doSubmit = this.doSubmit.bind(this);
    }
  
    doSubmit(doAddEvent, obj, e){      
      const { group, title, description, eventType } = e;
      const {data,loading, error} = obj;
      doAddEvent({variables: {title, description, eventType, group}});
    }

  render() {
    return (
      <Mutation mutation={ADD_EVENT} refetchQueries={[ {query:GET_EVENTS}]}>
      {(addEvent, {data, loading, error }) => 
      (
        <Container style={styles.container}>
          <Text>{loading && 'loading...'}</Text>
          <Text note style={{padding:5}}>Organise your event under a group</Text>
          <FormCreateEvent 
                isError={ error? error.message:''}
                isSuccess={ data? data:''}
                handleSubmit={this.doSubmit.bind(this, addEvent, {data,loading, error})} />         
        </Container>
 
      )}
      </Mutation> 
    )
  }
}