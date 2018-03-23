import React, { Component } from 'react'
import { Container, Header,Button,  Icon, Item, Input, Text } from 'native-base'; 

export default class HomeHeader extends Component {
  render() {
    return (
        <Header searchBar rounded>
        <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Button onPress={() => this.props.theNav('CreateGroup')} >
                <Icon name="add" />
            </Button>
        </Item>
        <Button transparent>
            <Text>Search events</Text>
        </Button>
    </Header>
    )
  }
}
