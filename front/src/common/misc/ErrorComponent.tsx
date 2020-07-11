import React from 'react';
import type CSS from 'csstype';
import { errorColor, primary, whiteBackground } from '../style/palette';

const style: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: whiteBackground,
  color: errorColor,
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
