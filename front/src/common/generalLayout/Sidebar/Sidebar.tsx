import React from 'react';
import type CSS from 'csstype';
import { primary } from '../../style/palette';
import SidebarItem from './SidebarItem';
import { sidebarElements } from './SidebarContent';

export const SIDEBAR_WIDTH = '10vh';

const sidebarStyle: CSS.Properties = {
  width: '12vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: primary,
  overflowX: 'hidden',
  alignItems: 'center',
};

const Sidebar: React.FunctionComponent = () => (
  <div style={sidebarStyle}>
    {sidebarElements.map((element) => (
      <SidebarItem {...element} />
    ))}
  </div>
);

export default Sidebar;
