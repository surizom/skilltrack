import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Main from './common/generalLayout/Main';
import LoadingComponent from './common/misc/LoadingComponent';

const SkillsPage = lazy(() => import('./skills/SkillsPage'));
const Home = lazy(() => import('./home/Home'));
const ErrorComponent = lazy(() => import('./common/misc/ErrorComponent'));

export const ROUTE_PATHS = {
  home: '/',
  skills: '/skills',
  error: '/error',
};

const Routes = () => (
  <Suspense fallback={<LoadingComponent />}>
    <Switch>
      <Main>
        <Route
          key={ROUTE_PATHS.home}
          path={ROUTE_PATHS.home}
          render={() => <Home />}
          exact={true}
        />
        <Route
          key={ROUTE_PATHS.skills}
          path={ROUTE_PATHS.skills}
          render={() => <SkillsPage />}
          exact={true}
        />
        <Route
          key={ROUTE_PATHS.error}
          path={ROUTE_PATHS.error}
          render={() => <ErrorComponent />}
          exact={true}
        />
      </Main>
    </Switch>
  </Suspense>
);

export default Routes;
