import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text, Icon, Input, Badge, StyleProvider } from 'native-base'; 
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class HomeFooter extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
            <Footer> 
                <FooterTab> 
                    <Button vertical>
                        <Icon name="search" onPress={() => this.props.theNav('Browse')} />
                        <Text>Browse</Text>
                    </Button>
                    <Button vertical onPress={() => this.props.theNav('ListGroup') }>
                        <Icon name="people" />
                        <Text>Group</Text>
                    </Button>
                    <Button vertical active onPress={() => this.props.theNav('ListEvent')}>
                        <Icon active name="happy" />
                        <Text>Event</Text>
                    </Button>
                    {/* <Button badge onPress={() => this.props.theNav('Notification') }>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="notifications" />
                        <Text>Alert</Text>
                    </Button> */}
                    <Button vertical onPress={() => this.props.theNav('Profile')}>
                        <Icon name="person" />
                        <Text>Profile</Text>
                    </Button>
                </FooterTab> 
            </Footer> 
        </StyleProvider>
    )
  }
}
