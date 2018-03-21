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

async function getToken(){
  const token = await AsyncStorage.getItem('@pixfam_token');
  return token;

}

const authLink =  setContext((_, { headers }) => {
  const token = getToken();
  console.log('token'); console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: httpLink, //authLink.concat(httpLink),
  cache: new InMemoryCache()
});
