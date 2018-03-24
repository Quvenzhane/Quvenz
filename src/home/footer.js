import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text, Icon, Input } from 'native-base'; 

export default class HomeFooter extends Component {
  render() {
    return (
        <Footer> 
            <FooterTab> 
                <Button vertical>
                    <Icon name="search" onPress={() => this.props.theNav('Browse')} />
                    <Text>Browse</Text>
                </Button>
                <Button onPress={() => this.props.theNav('ListGroup') }>
                    <Icon name="people" />
                    <Text>Group</Text>
                </Button>
                <Button vertical active onPress={() => this.props.theNav('ListEvent')}>
                    <Icon active name="happy" />
                    <Text>Event</Text>
                </Button>
                {/* <Button vertical>
                    <Icon name="notifications" />
                    <Text>Updates</Text>
                </Button> */}
                <Button vertical onPress={() => this.props.theNav('Profile')}>
                    <Icon name="person" />
                    <Text>Profile</Text>
                </Button>
            </FooterTab> 
     </Footer> 
    )
  }
}
