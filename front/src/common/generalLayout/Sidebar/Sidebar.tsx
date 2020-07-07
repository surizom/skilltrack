import React from 'react';
import type CSS from 'csstype';
import { primary } from '../../style/palette';
import SidebarItem from './SidebarItem';
import { sidebarElements } from './SidebarContent';
import { useHistory } from 'react-router';

export const SIDEBAR_WIDTH = '10vh';

const sidebarStyle: CSS.Properties = {
  width: '12vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: primary,
  overflowX: 'hidden',
  alignItems: 'center',
  cursor: 'pointer',
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
