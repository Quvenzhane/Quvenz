import React, { Component } from 'react'
import { Container, Header,Button,  Icon, Item, Input, Text, StyleProvider } from 'native-base'; 
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';


export default class HomeHeader extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search events" style={{backgroundColor: 'rgba(225,225,225,0.2)',}} />
                    <Button onPress={() => this.props.theNav('CreateGroup')} 
                            style={{backgroundColor:'#2980b9'}}>
                        <Icon name="add"  />
                    </Button>
                </Item>
                <Button transparent>
                    <Text>Search events</Text>
                </Button>
            </Header>
        </StyleProvider >
    )
  }
}
