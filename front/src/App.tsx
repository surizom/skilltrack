import React from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ErrorBoundary from './ErrorBoundary';
import SkillList from './SkillList';

const App = () => {
	const apolloClient = new ApolloClient({
		uri: 'http://localhost:8080/graphql',
	});

	return (
		<ErrorBoundary FallbackComponent={() => <div>ERROR</div>}>
			<ApolloProvider client={apolloClient}>
				<SkillList />
			</ApolloProvider>
		</ErrorBoundary>
	);
};

export default App;
