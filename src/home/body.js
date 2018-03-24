import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon, Item, Input,
         Card, CardItem,Right,Left,Thumbnail,Body, H1, ActionSheet,Root  } from 'native-base'; 
import { Image,ScrollView, View } from 'react-native'; 
import { StackNavigator,} from 'react-navigation';
import styles from './style'; 

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
        this.state = {};
      }

  render() {
    return (
        <Content style={styles.container}>
            <Text style={styles.groupHeader} note>Family Groups</Text>
            <View style={styles.defaultGroup}>
                <View style={styles.groupBirthday}  >
                    <Icon name="add" onPress={() =>this.props.theNav('Event')} />
                    <H1>B</H1>
                    <Text> Birthday</Text>
                </View>    
                <View style={styles.groupWedding} >
                    <Icon name="add" onPress={() =>this.props.theNav('Event')} />
                    <H1>W</H1>
                    <Text>Wedding</Text>
                </View>    
                <View style={styles.groupGraduation}  >
                    <Icon name="add" onPress={() =>this.props.theNav('Event')} />
                    <H1>G</H1>
                    <Text>Graduation</Text>
                </View>    
            </View>

            <Text style={styles.groupHeader} note>Manage</Text>
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

            <Text style={styles.groupHeader} note>Popular Events</Text>
            <View style={styles.containerPopular}>
                <Card  >
                    <CardItem>
                        <Text onPress={() =>this.props.theNav('Event')}>The Experience 2018</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Text>Osun Osun-oshogo</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Text>Laravel Meetup 2020</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem> 
                    <CardItem>
                        <Text>The Experience 2018</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Text>Osun Osun-oshogo</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Text>Laravel Meetup 2020</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem> 
                </Card>
            </View> 
        </Content> 
    )
  }
}
