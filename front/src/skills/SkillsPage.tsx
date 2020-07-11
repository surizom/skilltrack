import React from 'react';
import type CSS from 'csstype';
import SkillPageHeader from './SkillsPageHeader';
import SkillList from './SkillList';
import { SMALL_SCREEN_TRESHLOD } from '../common/style/responsive';

const style: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  flex: window.innerWidth > SMALL_SCREEN_TRESHLOD ? 1 : undefined,
};

const SkillsPage: React.FunctionComponent = () => {
  return (
    <div style={style}>
      <SkillPageHeader />
      <SkillList />
    </div>
  );
};

export default SkillsPage;