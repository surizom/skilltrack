import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Main from './common/generalLayout/Main';
import ErrorComponent from './common/misc/ErrorComponent';

const SkillList = lazy(() => import('./skills/SkillList'));

export const ROUTE_PATHS = {
  skills: '/skills',
  error: '/error',
};

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Main>
        <Route
          key={ROUTE_PATHS.skills}
          path={ROUTE_PATHS.skills}
          render={() => <SkillList />}
        />
        <Route
          key={ROUTE_PATHS.error}
          path={ROUTE_PATHS.error}
          render={() => <ErrorComponent />}
        />
      </Main>
    </Switch>
  </Suspense>
);

export default Routes;
