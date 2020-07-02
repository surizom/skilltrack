import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ErrorBoundary from './ErrorBoundary';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FunctionComponent = () => {
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
  });

  return (
    <ErrorBoundary FallbackComponent={() => <div>ERROR</div>}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
