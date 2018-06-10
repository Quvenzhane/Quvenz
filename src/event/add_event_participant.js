import React, { Component } from 'react'
import { Container, Content,Text, Item, View, Icon, Input, H3, Form, Button, Toast} from 'native-base';
import styles from './style'; 
import { Keyboard } from 'react-native'
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { SEND_REQUEST } from '../graph/mutations/sendRequestMutation';
import { USER_SEARCH} from '../graph/queries/userSearchQueries';
import { ApolloConsumer } from 'react-apollo';


export default class AddEventParticipant extends Component {
  constructor(props){
    super(props);
    this.state = { 
       showToast: false,
       findUser:"", findUserResult:"Search for friends on Pixfam", findUserStatus:false,
       timeout: null,
       event:null, receiverUser:null, status:"Pending",requestType:"Invite"
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
        this.onResultGotten('User not found in our records. Try again!');
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
      const { receiverUser, event, status, requestType } = this.state;
      const {data,loading, error} = obj;
      doSendInvite({variables: {receiverUser, event,status, requestType}});
    }
  }

  onResultGotten = findUserResult => this.setState(() => ({findUserResult}));

  render() {
    this.state.event = this.props.navigation.getParam('eventId');
    const eventTitle = this.props.navigation.getParam('eventTitle');

    return (
      <Container style={styles.container}>
          
          <H3 style={styles.header}>Tell friends about {eventTitle}</H3>
          <Content style={styles.backgroundEdit}>
              <Text style={{paddingBottom:10}}>Inivited friends can only access this event</Text>
              
              <Mutation mutation={SEND_REQUEST}>
                {(doSendRequest, {data, loading, error }) => 
                (
                <Form>
                    {loading && <Text>Loading...</Text>}
                    {error?
                      Toast.show({
                        text: error.message,
                        type: "danger",
                        duration: 4000
                        }):<Text></Text>}

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
                  <View style={{paddingTop:5, paddingBottom:15 }}>
                  <Text note style={{marginBottom:10}}>{this.state.findUserResult}</Text>

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

             <Text style={{paddingTop:30, paddingBottom:10}} note>You can also invite more people by sharing event link with a group of friends</Text>
              <Button  full rounded info>
                   <Text>Share event link</Text>
              </Button>
          </Content>   
      </Container>
    )
  }
}
