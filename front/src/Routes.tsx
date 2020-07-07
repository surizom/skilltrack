import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Main from './common/generalLayout/Main';

const SkillList = lazy(() => import('./skills/SkillList'));

export const ROUTE_PATHS = {
  skillList: '/skillList',
};

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Main>
        <Route
          key={ROUTE_PATHS.skillList}
          path={ROUTE_PATHS.skillList}
          render={() => <SkillList />}
        />
      </Main>
    </Switch>
  </Suspense>
);

export default Routes;
