import React from 'react';
import type CSS from 'csstype';
import { primary, whiteBackground } from '../style/palette';

const style: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: whiteBackground,
  color: primary,
  fontSize: '10vh',
  fontWeight: 'bold',
  padding: '5vh',
};

const LoadingComponent: React.FunctionComponent = () => (
  <div style={style}>
    <div>Loading ...</div>
  </div>
);

export default LoadingComponent;
