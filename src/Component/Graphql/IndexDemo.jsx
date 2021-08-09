import React from 'react';
import Home from './Home';
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   HttpLink,
} from '@apollo/client';

function IndexDemo() {
  const client = new ApolloClient({
    cache : new InMemoryCache(),
    uri: "https://48p1r2roz4.sse.codesandbox.io/"
  })
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default IndexDemo
