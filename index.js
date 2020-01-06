import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import App from 'App';
import {name as appName} from './app.json';

// Create the client as outlined in the setup Guide
const address = Platform.OS === 'ios' ? 'localhost:4000' : '127.0.0.1:4000';
const client = new ApolloClient({
  uri: `http://${address}/graphql`,
});

const Index = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => Index);
