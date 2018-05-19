import React, { Component } from 'react'
import {  View, Text,ImageBackground} from 'react-native'

import { Mutation } from "react-apollo";
import { Container, Content } from 'native-base';


import { ADD_EVENT} from '../graph/mutations/eventMutation';
import styles from './style'; 
import FormCreateEvent from '../components/FormCreateEvent';

export default class CreateEvent extends Component {
    constructor(props){
      super(props);
      this.state = { 
        loading: false, created: false,
        errorMessage: false 
      };
      this.doSubmit = this.doSubmit.bind(this);

    }
    doSubmit(doAddEvent, obj, e){      
      const { group, title, description } = e;
      const {data,loading, error} = obj;
      doAddEvent({variables: {title, description, group}});
      if(loading) this.setState({loading: true});
      if(error) this.setState({errorMessage: 'an error occurred, try again'});
      if(data){
        console.log('successfully created your event ');
        this.setState({created: true, errorMessage: false, loading: false})
      }
      //console.log(obj);
    }
  render() {
    return (
      <Mutation mutation={ADD_EVENT}>
      {(addEvent, {data, loading, error }) => 
      (
        <Container style={styles.container}>
          <FormCreateEvent isloading={this.state.loading} 
                           iserror={this.state.errorMessage} 
                           iscreated={this.state.created} 
                           handleSubmit={this.doSubmit.bind(this, addEvent, {data,loading, error})} />         
        </Container>
 
      )}
      </Mutation> 
    )
  }
}