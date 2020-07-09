import type CSS from 'csstype';
import { primary, quintary, secondary } from '../style/palette';
import React from 'react';

interface Props {
  text: string;
}

const bigButtonContainerStyle: CSS.Properties = {
  width: '20vh',
  height: '6vh',
  margin: '2vh',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: primary,
};

const textStyle: CSS.Properties = {
  fontSize: '5vh',
  margin: '1vh',
};

const HeaderTitle: React.FunctionComponent<Props> = (props) => (
  <div style={bigButtonContainerStyle}>
    <div style={textStyle}>{props.text}</div>
  </div>
);

export default HeaderTitle;
