import React, { Component } from 'react'
import { Container, Content,Text, Item, View, Icon, Input, H3, Form, Button, Toast} from 'native-base';
import styles from './style'; 
import { Keyboard } from 'react-native'
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { SEND_REQUEST } from '../graph/mutations/sendRequestMutation';
import { USER_SEARCH} from '../graph/queries/userSearchQueries';
import { ApolloConsumer } from 'react-apollo';

export default class AddGroupMember extends Component {
  constructor(props){
    super(props);
    this.state = { 
       showToast: false,
       findUser:"", findUserResult:"Search to add", findUserStatus:false,
       timeout: null,
       group:null, receiverUser:null, status:"Pending",
    };
  }

  async doSearchOnTextChange  (text,type, dClient){
      this.setState({ [type]: text });
      clearTimeout(this.state.timeout);
      this.state.timeout  = setTimeout(function(){
        console.log('Input value:', text );
        //this.doSearch(client);
      }, 500);
      this.setState({ [type]: text });

      const { data } = await dClient.query({
        query: USER_SEARCH,
        variables: { searchQuery: text }
      });
      try{
        console.log(data.userSearch.username);
        this.state.findUserStatus = true;
        this.state.receiverUser = data.userSearch._id
        this.onResultGotten(data.userSearch.username+" was found. Invite user");
      }catch (error){
        this.state.findUserStatus = false;
        this.onResultGotten('User not found on our records. Try again!');
      }
    
  }

  doSubmit = (doSendInvite, obj, e) => {
    Keyboard.dismiss();
    if(this.state.findUser ==""){
      Toast.show({
        text: "Whoops! Enter the user detail",
        type: "warning",
        duration: 4000
        });
    }else if(!this.state.findUserStatus){
      Toast.show({
        text: "Aw! Enter a vaild user to continue",
        duration: 4000
        });
    }else{
      const { receiverUser, group, status } = this.state;
      const {data,loading, error} = obj;
      doSendInvite({variables: {receiverUser, group,status}});
    }
  }

  onResultGotten = findUserResult => this.setState(() => ({findUserResult}));
  render() {
    this.state.group = this.props.navigation.getParam('groupId');
    const groupTitle = this.props.navigation.getParam('groupTitle');
    return (
      <Container style={styles.container}>
          
          <H3 style={styles.header}>Add friends to {groupTitle}</H3>
          <Content style={styles.backgroundEdit}>
              <Text note>{this.state.findUserResult}</Text>
              <Mutation mutation={SEND_REQUEST}>
                {(doSendRequest, {data, loading, error }) => 
                (
                <Form>
                    {loading && <Text>Loading...</Text>}
                    {error && <Text>Error :( Please try again</Text>}
                   
                    {data?
                      data.sendRequest.status == "Pending"
                        ?Toast.show({
                          text: "Invite was successfull. Add another user",
                          type: "success",
                          duration: 4000
                          })
                        :Toast.show({
                            text: "You have already invited this user",
                            type: "warning",
                            duration: 4000
                            })
                      :<Text></Text>
                    }  
                  <View style={{paddingTop:15, paddingBottom:15 }}>
                    <ApolloConsumer>
                        {client => (
                          <Item rounded >
                            <Input placeholder='Search username or email' 
                            onChangeText={text => this.doSearchOnTextChange(text,'findUser',client)}
                            value={this.state.findUser} />
                            <Icon  name="send" onPress={this.doSubmit.bind(this, doSendRequest, {data,loading, error})} />
                          </Item>
                        )}
                    </ApolloConsumer>
                  </View>
                </Form>
                )}
              </Mutation> 

              <Text style={{paddingTop:30 }} note>Invite by email</Text>
              <Form>
                <View style={{paddingTop:15, paddingBottom:15 }}>
                    <Item rounded >
                    <Input placeholder='Add email' />
                    <Icon  name="send" />
                    </Item>
                </View>
              </Form>
              <Text style={{paddingTop:30, paddingBottom:30 }} >Members in a group can add pictures, comments and like all events under that group</Text>
              <Button  full rounded info>
                   <Text>Share group link</Text>
              </Button>
          </Content>   
      </Container>
    )
  }
}
