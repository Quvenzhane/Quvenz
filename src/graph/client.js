import React from 'react';
/*
import { createHttpLink, HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context';
import { onError } from "apollo-link-error";
import { ApolloLink } from 'apollo-link';
*/

import {AsyncStorage} from 'react-native';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

//http://localhost was giving error, so I changed to http://10.0.2.2
//const httpLink = new HttpLink({ uri: 'http://10.0.2.2:4800/graphql' })
//const httpLink = createHttpLink({uri: 'http://10.0.2.2:4800/graphql'});

export const client = new ApolloClient({
  uri: 'http://192.168.151.101:4800/graphql',
  request: async (operation) => {
    const token = await AsyncStorage.getItem('@pixfam_token');
    if(token){
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : null
        }
      }); 
    }
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
   if (networkError) console.log(`[Network error]: ${networkError}`);
  },

});