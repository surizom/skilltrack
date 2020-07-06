import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const SkillList = lazy(() => import('./skills/SkillList'));

export const ROUTE_PATHS = {
  skillList: '/skillList',
};

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route
        key={ROUTE_PATHS.skillList}
        path={ROUTE_PATHS.skillList}
        render={() => <SkillList />}
      />
    </Switch>
  </Suspense>
);

export default Routes;
