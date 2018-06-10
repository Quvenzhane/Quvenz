import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon, Item, Input,
         Card, CardItem,Right,Left,Thumbnail,Body, H1, ActionSheet,Root  } from 'native-base'; 
import { Image,ScrollView, View, ImageBackground } from 'react-native'; 
import { StackNavigator,} from 'react-navigation';
import styles from './style'; 
import { Query } from "react-apollo";
import { GET_POPULAR_EVENTS} from '../graph/queries/eventPopularQueries';

var BUTTONS = [
    { text: "Create", icon: "add", iconColor: "#2c8ef4" },
    { text: "List", icon: "list", iconColor: "#f42ced" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
// var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 3;

export default class HomeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularEvents:null,
        };

      }

    loadDetails() {   
    return this.state.popularEvents.map(events => (
        <CardItem>
            <Body>
                <Text onPress={() =>this.props.theNav('Event',{eventId:events._id})}>{events.title}</Text>
                <Text note>reactions 102,043</Text>
            </Body>
            <Right>
                <Icon name="arrow-forward" />
            </Right>
        </CardItem>
        ))
    }

  render() {

    return (
        <Content style={styles.container}>
            <Text style={styles.groupHeader} note> Group: Family</Text>
            <View style={styles.defaultGroup}>
                
                <ImageBackground style={styles.eventBirthday} source={require('../../images/cake.jpg')}>
                    <Icon name="add" onPress={() =>this.props.theNav('Event')} style={{marginTop:40}} />
                    {/* <H1>B</H1>
                    <Text> Birthday</Text> */}
                </ImageBackground>  

                <View style={styles.createEvent1} >
                    <Icon name="add" onPress={() =>this.props.theNav('CreateEvent')} style={{marginTop:40}} />
                </View>    
                <View style={styles.createEvent2}  >
                    <Icon name="add" onPress={() =>this.props.theNav('CreateEvent')} style={{marginTop:40}} />
                </View>    
            </View>

           
            <Text style={styles.groupHeader} note> Manage</Text>
            <View style={styles.groupNav}  >
                <Root>
                    <Button  rounded light
                        onPress={() =>
                        ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            //destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Manage Groups"
                        },
                        buttonIndex => { 
                            try{
                                if(BUTTONS[buttonIndex].text == "Create" ){
                                    this.props.theNav('CreateGroup')
                                }else if(BUTTONS[buttonIndex].text == "List" ){
                                    this.props.theNav('ListGroup')
                                }
                            }catch(error){}
                        }
                        )}>
                        <Text>Groups</Text>
                    </Button>
                </Root>   
                <Root>   
                    <Button  rounded light
                        onPress={() =>
                        ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            //destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Manage Events"
                        },
                        buttonIndex => { 
                            try{
                                if(BUTTONS[buttonIndex].text == "Create" ){
                                    this.props.theNav('CreateEvent')
                                }else if(BUTTONS[buttonIndex].text == "List" ){
                                    this.props.theNav('ListEvent')
                                }
                            }catch(error){}
                        }
                        )}>
                        <Text>Events</Text>
                    </Button>
                </Root>
            </View>

            <Text style={styles.groupHeader} note><Icon name="ios-pulse-outline" style={{color:'gray'}}/>  Popular Events</Text>
            <View style={styles.containerPopular}>
                <Query query={GET_POPULAR_EVENTS} fetchPolicy="network-only">
                {({ loading, error, data }) => 
                { 
                    var theList = null;
                    if (loading) return <Text> Loading...</Text>;
                    if (error) return <Text> error...</Text>
                    if(data){ console.log(data)
                        if(data.getPopularEvents){ 
                            this.state.popularEvents = data.getPopularEvents;
                        }
                    }
                    return(    
                        <Card >
                             {this.loadDetails()}
                        </Card>
                        )
                    }}
                </Query>
            </View> 
        </Content> 
    )
  }
}
