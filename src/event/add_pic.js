import React, { Component } from 'react';
import { Picker } from 'react-native'; 
import { Container, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import styles from './style'; 

export default class AddPicture extends Component {
    constructor(props){
        super(props);
        this.state = { language: "Pick a Group", language2: "Pick a tag"};
      }

  render() {
    return (
        <Container  style={styles.container}>
            <Content>
            <Form>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Pick a Group" value="Family" />
                    <Picker.Item label="Family" value="Family" />
                    <Picker.Item label="Friends" value="js" />
                    <Picker.Item label="Osun Festival" value="js" />
                </Picker>
                <Picker
                    selectedValue={this.state.language2}
                    onValueChange={(itemValue, itemIndex) => this.setState({language2: itemValue})}>
                    <Picker.Item label="Add tag" value="Family" />
                    <Picker.Item label="VIP" value="Family" />
                    <Picker.Item label="Haters" value="Family" />
                    <Picker.Item label="Friends" value="js" />
                    <Picker.Item label="Family" value="js" />
                </Picker>
                <Item floatingLabel>
                    <Label>Description</Label>
                    <Input />
                </Item>
                <Button block info style={styles.button}>
                     <Text>Add Pictures</Text>
                </Button>
            </Form>
            </Content>
        </Container>
    )
  }
}
