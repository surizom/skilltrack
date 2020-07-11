import React from 'react';
import type CSS from 'csstype';
import { primary, secondary, whiteBackground } from '../style/palette';
import { CircularProgress } from '@material-ui/core';

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

const LoadingComponent = () => (
  <div style={style}>
    <CircularProgress color="secondary" />
  </div>
);

export default LoadingComponent;
