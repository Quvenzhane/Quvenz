import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ApolloProvider } from 'react-apollo';

import PixNavigation from './PixNavigation';
import {client } from './src/graph/client';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <PixNavigation />
      </ApolloProvider>
    );
  }
}
