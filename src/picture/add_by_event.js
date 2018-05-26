import React, { Component } from 'react';
import { Picker } from 'react-native'; 
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast} from 'native-base';
import styles from './style'; 
import { Query } from "react-apollo";
import { GET_EVENTS} from '../graph/queries/eventQueries';


export default class AddPictureByItem extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            showToast: false,
            eventList:"", event:""
          };
        
      }
      loadEventList() {
        return this.state.eventList.map(events => (
            <Picker.Item label={events.event.title} value={events.event._id} />
         ))
    }

  render() {
    return (
    
        <Query query={GET_EVENTS}>
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
                    if(data.getEventMembers){ 
                        this.state.eventList = data.getEventMembers;
                   }
                }
            return(
                <Container  style={styles.container}>
                    <Text>{loading && 'loading...'}</Text>
                    <Content style={styles.backgroundEdit}>
                    <Form>
                        <Picker
                            selectedValue={this.state.event}
                            onValueChange={(itemValue, itemIndex) => this.setState({event: itemValue})}>
                             {this.loadEventList()}
                        </Picker>
                        <Item floatingLabel>
                            <Label>Description</Label>
                            <Input />
                        </Item>
                        <Button block rounded info style={styles.button}>
                            <Text>Add Pictures</Text>
                        </Button>
                    </Form>
                    </Content>
                </Container>
            )
        }}
        </Query>

    )
  }
}
