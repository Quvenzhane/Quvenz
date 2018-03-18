import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from "graphql-tag";

//const client = new ApolloClient({ uri: 'http://localhost:4800/graphql' });
const httpLink = new HttpLink({ uri: 'http://10.0.2.2:4800/graphql' })

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });