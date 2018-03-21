import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon, Item, Input,
         Card, CardItem,Right,Left,Thumbnail,Body, H1  } from 'native-base'; 
import { Image,ScrollView, View } from 'react-native'; 
import styles from './style'; 
import { StackNavigator,} from 'react-navigation';


export default class HomeBody extends Component {
    
    constructor(props){
        super(props);
    }
  render() {
    //const { navigate } = this.props.navigation;
    return (
        <Content style={styles.container}>
            <Text style={styles.groupHeader} note>Family Groups</Text>
            <View style={styles.defaultGroup}>
                <View style={styles.groupBirthday} >
                    <Icon name="add" />
                    <H1>B</H1>
                    <Text> Birthday</Text>
                </View>    
                <View style={styles.groupWedding}  >
                    <Icon name="add" />
                    <H1>W</H1>
                    <Text>Wedding</Text>
                </View>    
                <View style={styles.groupGraduation}  >
                    <Icon name="add" />
                    <H1>G</H1>
                    <Text>Graduation</Text>
                </View>    
            </View>

            <View style={styles.groupNav}  >
                {/* <Button rounded light onPress={() => navigate('CreateGroup') }> */}
                <Button rounded light>
                    <Text >Create Group</Text>
                </Button>
                <Button rounded light>
                    <Text>List Group</Text>
                </Button>
                <Button rounded light>
                    <Text>Add Event</Text>
                </Button>
            </View>

            <View style={styles.containerPopular}>
                <Text style={styles.groupHeader} note>Popular Events</Text>
                <Card  >
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
