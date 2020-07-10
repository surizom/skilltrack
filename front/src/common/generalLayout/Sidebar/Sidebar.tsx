import React from 'react';
import type CSS from 'csstype';
import { primary } from '../../style/palette';
import SidebarItem from './SidebarItem';
import { sidebarElements } from './SidebarContent';
import { useHistory } from 'react-router';

export const SIDEBAR_WIDTH = '14vw';

const sidebarStyle: CSS.Properties = {
  maxWidth: SIDEBAR_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: primary,
  overflowX: 'hidden',
  alignItems: 'center',
};

const Sidebar: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <div style={sidebarStyle}>
      {sidebarElements().map((element) => (
        <SidebarItem history={history} {...element} key={element.name} />
      ))}
    </div>
  );
};
export default Sidebar;
