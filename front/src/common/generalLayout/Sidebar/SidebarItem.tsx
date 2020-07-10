import React from 'react';
import type CSS from 'csstype';

import { SvgIcon } from '@material-ui/core';
import { quintary } from '../../style/palette';
import type { sidebarElementInfo } from './SidebarContent';
import type { History } from 'history';

interface Props extends sidebarElementInfo {
  history: History;
}

const sidebarItemStyle: CSS.Properties = {
  maxWidth: '10vw',
  maxHeight: '12vh',
  margin: '2vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontSize: '2vw',
  color: quintary,
  alignItems: 'center',
  justifyItems: 'center',
  cursor: 'pointer',
};

const iconStyle: CSS.Properties = {
  fontSize: '6vw',
};

const SidebarItem: React.FunctionComponent<Props> = (props) => (
  <div style={sidebarItemStyle} onClick={() => props.history.push(props.link)}>
    <SvgIcon style={iconStyle} component={props.icon} />
    <div>Skills</div>
  </div>
);

export default SidebarItem;
