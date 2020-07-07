import React from 'react';
import type CSS from 'csstype';

import { SvgIcon } from '@material-ui/core';
import { quintary } from '../../style/palette';
import type { sidebarElementInfo } from './SidebarContent';

type Props = sidebarElementInfo;

const sidebarItemStyle: CSS.Properties = {
  width: '10vh',
  height: '12vh',
  margin: '2vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontSize: '3vh',
  color: quintary,
  alignItems: 'center',
  justifyItems: 'center',
};

const iconStyle: CSS.Properties = {
  fontSize: '6vh',
};

const SidebarItem: React.FunctionComponent<Props> = (props) => (
  <div style={sidebarItemStyle} onClick={() => null}>
    <SvgIcon style={iconStyle} component={props.icon} />
    <div>Skills</div>
  </div>
);

export default SidebarItem;
