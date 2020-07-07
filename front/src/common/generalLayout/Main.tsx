import React from 'react';
import type CSS from 'csstype';
import type { ReactNode } from 'react';
import Sidebar, { SIDEBAR_WIDTH } from './Sidebar/Sidebar';

interface Props {
  children?: ReactNode;
}

const containerStyle: CSS.Properties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'row',
};
const childrenContainerStyle: CSS.Properties = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  overflowY: 'auto',
  height: '100%',
};

const Main: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <div style={containerStyle}>
      <Sidebar />
      <div style={childrenContainerStyle}>{children}</div>
    </div>
  </>
);

export default Main;
