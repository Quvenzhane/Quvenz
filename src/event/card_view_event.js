import React, { Component } from 'react'
import { Image, View, Text, TouchableOpacity, Keyboard} from 'react-native';
import { Card, CardItem, Thumbnail, Left, Right, Body, Icon, Button, Form, Item, Input,Toast } from 'native-base';
import { Mutation } from "react-apollo";
import { ADD_PHOTO_COMMENT } from '../graph/mutations/photoCommentMutation';
import { GET_USER_PHOTO} from '../graph/queries/photoByUserQueries';

export default class CardViewEvent extends Component {
  constructor(props){
    super(props); 
    this.state = {
      showToast: false,
      comment:null,photo:null
    };
    this.doSubmit = this.doSubmit.bind(this);
  }

  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
  } 

  doSubmit = (doComment, obj, e) => {
    Keyboard.dismiss();
    if(this.state.comment == null){
      Toast.show({
        text: "Whoops! Type a message",
        type: "warning",
        duration: 4000
        });
    }else{
      this.state.photo = this.props.photo
      const { comment, photo } = this.state;
      const {data,loading, error} = obj;
      doComment({variables: {comment, photo}});
      this.state.comment = null
    }
  }
  render() {
    const eventId = this.props.eventId;
    const userId = this.props.userId;
    return (
      
        <Card>
          <CardItem>
            <Left>
                <Text note>Jan 30, 2018</Text>
            </Left>  
          </CardItem>
          <CardItem cardBody>
              <Image style={{height:350, width:null, flex:1}}  source={{ uri: this.props.imageSource}} />
          </CardItem>

          <CardItem style={{height:30}}>
            <Left>
                <Button transparent>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text> {this.props.likes}</Text> 
                </Button>
                <Button transparent  onPress={() =>this.props.theNav('EventPicDetails')}>
                  <Icon name="ios-chatbubbles-outline" style={{color:"black"}} />
                  <Text> {this.props.comments !=0?this.props.comments:null}</Text> 
                </Button>
                <Button transparent>
                  <Icon name="ios-eye-outline" style={{color:"black"}} />
                </Button>
            </Left>
          </CardItem>

          <CardItem>
            <Body  style={{  flex:1, flexDirection: 'column', alignItems:'stretch'}}>
              <View>
                    {this.props.lastComment
                        ?<Text>{this.props.lastCommentFromUser
                          ?<Text style={{fontWeight:"900" }}>{this.props.lastCommentFromUser} </Text>:null}
                          {this.props.lastComment}</Text>
                        :null
                    } 
                  <Mutation mutation={ADD_PHOTO_COMMENT} 
                            refetchQueries={[ {query:GET_USER_PHOTO, variables:{userId, eventId}}]}>
                    {(doComment, {data, loading, error }) => 
                    (           
                        <Form style={{padding:8,}}>
                             {loading && <Text>sending...</Text>}
                              {error && Toast.show({
                                          text: "Something went wrong. Try again",
                                          type: "warning",
                                          duration: 4000
                                          })}
                              {data &&  Toast.show({
                                          text: "Comment saved",
                                          type: "success",
                                          duration: 4000
                                          }) 
                              }
                            <Item rounded >
                            <Input placeholder='Add comment' 
                                autoCapitalize="none" autoCorrect={false}
                                onChangeText={text => this.onInputTextChange(text, 'comment')} 
                                value={this.state.comment} />
                            <Icon  name="send" onPress={this.doSubmit.bind(this, doComment, {data,loading, error})} />
                            </Item>
                        </Form>
                      )}
                </Mutation> 
            </View>
            </Body>
          </CardItem>      
        </Card>         

    ) 
  }
}
