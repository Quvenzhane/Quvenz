import React from "react";
import { AsyncStorage } from "react-native";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export const client = new ApolloClient({
  // uri: "https://pix-fam.herokuapp.com/graphql",
  uri: "http://10.0.3.2:4800/graphql",
  //uri: "http://192.168.88.22:4800/graphql",

  request: async operation => {
    const token = await AsyncStorage.getItem("@pixfam_token");
    if (token) {
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
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});
