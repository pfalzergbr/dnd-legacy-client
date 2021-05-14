import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API,
  credentials: 'include',
  fetchOptions: {
    mode: 'no-cors'
  }
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

