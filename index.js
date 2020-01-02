import React from 'react';
import {AppRegistry} from 'react-native';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import App from 'App';
import {name as appName} from './app.json';

// Create the client as outlined in the setup Guide
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const Index = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => Index);
