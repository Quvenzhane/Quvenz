import React, { Component } from 'react'
import { View, Text,ImageBackground} from 'react-native'

import { Mutation } from "react-apollo";
import { Container, Content } from 'native-base';

import { EDIT_PROFILE} from '../graph/mutations/profileMutation';
import styles from './style'; 
import FormEditProfile from '../components/FormEditProfile';

export default class EditProfile extends Component {
    constructor(props){
      super(props);
      this.state = { 
        //loading: false,
      };
      this.doSubmit = this.doSubmit.bind(this);

    }
    doSubmit(doEditProfile, obj, e){
        const { firstName, lastName, sex, dateOfBirth, bio } = e;
        const {data,loading, error} = obj;
        doEditProfile({variables: {firstName, lastName, sex, dateOfBirth, bio}}); 
    }
  render() {
    return (
      <Mutation mutation={EDIT_PROFILE}>
      {(updateProfile, {data, loading, error }) => 
      (
        <Container style={styles.container}>
          <Text>{loading && 'loading'}</Text>
          {/* <Text>{data && 'success'}</Text> */}
            <FormEditProfile
                isError={ error? error.message:''}
                isSuccess={ data? data:''}
                handleSubmit={this.doSubmit.bind(this, updateProfile, {data,loading, error})} />         
        </Container>
 
      )}
      </Mutation> 
    )
  }
}