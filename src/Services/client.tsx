import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { onError } from '@apollo/client/link/error';

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({message}) => {
//       alert(`GraphQL error ${message}`)
//     })
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: 'http://localhost:8080/graphql' }),
// ]);

export const client = new ApolloClient({
  // link: link,
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});
