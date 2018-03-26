import { ApolloClient } from 'apollo-client'
//import { HttpLink } from 'apollo-link-http'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from "graphql-tag";
import {AsyncStorage} from 'react-native';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

//http://localhost was giving error, so I changed to http://10.0.2.2
//const httpLink = new HttpLink({ uri: 'http://10.0.2.2:4800/graphql' })
const httpLink = createHttpLink({
  uri: 'http://10.0.2.2:4800/graphql',
});
//const httpLink = new HttpLink({ uri: 'http://5a569416.ngrok.io/graphql' })

const middlewareLink = new ApolloLink((operation, forward) => {
//b4
var dheaders = null;
    AsyncStorage.getItem('@pixfam_token').then(token => { console.log('gotten token for headers')
    if(token != null){ console.log('token e is not null'); console.log(token);
    dheaders = {//...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
    console.log(JSON.stringify(dheaders, null, 4));
    operation.setContext({
      headers: dheaders
    });
    return forward(operation)
  
    }else{ console.log('no token befor catch');
      operation.setContext({
        headers: {
          authorization:  null
        }
      });
      return forward(operation)
    }

    }).catch(error =>{ console.log('catching getItem error')
        operation.setContext({
          headers: {
            authorization:  null
          }
        });
        return forward(operation)
    });


//after
  });

/*
const authLink =  setContext(async(_, { headers }) => {
  const token = await AsyncStorage.getItem('@pixfam_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});*/

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});



export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink,errorLink), //authLink.concat(httpLink),
  cache: new InMemoryCache()
});
