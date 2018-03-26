import React from 'react';
import { ApolloClient } from 'apollo-client'
//import { HttpLink } from 'apollo-link-http'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from "graphql-tag";
import {AsyncStorage} from 'react-native';
import { setContext } from 'apollo-link-context';

//http://localhost was giving error, so I changed to http://10.0.2.2
//const httpLink = new HttpLink({ uri: 'http://10.0.2.2:4800/graphql' })
const httpLink = createHttpLink({
  uri: 'http://10.0.2.2:4800/graphql',
});
//const httpLink = new HttpLink({ uri: 'http://5a569416.ngrok.io/graphql' })

const authLink =  setContext(async(_, { headers }) => {
  const token = await AsyncStorage.getItem('@pixfam_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
