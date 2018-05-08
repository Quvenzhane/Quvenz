import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import PixNavigation from './PixNavigation';
import {client } from './src/graph/client';
import { Root } from "native-base";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
       <Root>
         <PixNavigation />
       </Root>
      </ApolloProvider>
    );
  }
}
