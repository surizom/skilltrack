import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ErrorBoundary from './ErrorBoundary';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import type { History } from 'history';
import ErrorComponent from './common/misc/ErrorComponent';

export const ENV_VARS = import.meta.env;

interface Props {
  history: History;
}

const App: React.FunctionComponent<Props> = ({ history }) => {
  const apolloClient = new ApolloClient({
    uri: ENV_VARS.SNOWPACK_PUBLIC_API_URL,
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <ApolloProvider client={apolloClient}>
        <Router history={history}>
          <Routes />
        </Router>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
