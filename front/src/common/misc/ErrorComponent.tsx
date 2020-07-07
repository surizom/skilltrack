import React from 'react';
import type CSS from 'csstype';
import {
  primary,
  quartenary,
  quintary,
  tertiary,
  whiteBackground,
} from '../style/palette';

const style: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: whiteBackground,
  color: primary,
  fontSize: '15vh',
  fontWeight: 'bolder',
  padding: '5vh',
};

const ErrorComponent: React.FunctionComponent = () => (
  <div style={style}>
    <div>An error has occured :(</div>
  </div>
);

export default ErrorComponent;
