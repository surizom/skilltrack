import React, { useContext, useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ErrorBoundary from './ErrorBoundary';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import type { History } from 'history';
import ErrorComponent from './common/misc/ErrorComponent';
import theme from './common/style/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { DarkModeContext } from './common/style/darkMode';

export const ENV_VARS = import.meta.env;

interface Props {
  history: History;
}

const App: React.FunctionComponent<Props> = ({ history }) => {
  const apolloClient = new ApolloClient({
    uri: ENV_VARS.SNOWPACK_PUBLIC_API_URL,
  });

  const darkModeContext = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={theme(darkModeContext.themeColor)}>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <ApolloProvider client={apolloClient}>
          <Router history={history}>
            <Routes />
          </Router>
        </ApolloProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
