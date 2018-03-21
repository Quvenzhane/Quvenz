import React, { Component } from 'react'
import { Container, Header,Button,  Icon, Item, Input, Text } from 'native-base'; 

export default class HomeHeader extends Component {
  render() {
    return (
        <Header searchBar rounded>
        <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Button >
                <Icon name="add" />
            </Button>
        </Item>
        <Button transparent>
            <Text>Search</Text>
        </Button>
    </Header>
    )
  }
}
