import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Main from './common/generalLayout/Main';

const SkillList = lazy(() => import('./skills/SkillList'));

export const ROUTE_PATHS = {
  skills: '/skills',
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
      </Main>
    </Switch>
  </Suspense>
);

export default Routes;
