import React from 'react';
import type CSS from 'csstype';
import { secondary } from './common/style/palette';

export const SIDEBAR_WIDTH = '10vh';

const sidebarStyle: CSS.Properties = {
  width: '10vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: secondary,
  overflowX: 'hidden',
};

const Sidebar: React.FunctionComponent = () => <div style={sidebarStyle}></div>;

export default Sidebar;
