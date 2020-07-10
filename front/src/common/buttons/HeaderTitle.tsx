import type CSS from 'csstype';
import { primary, quintary, secondary } from '../style/palette';
import React from 'react';

interface Props {
  text: string;
}

const headerTitleContainerStyle: CSS.Properties = {
  display: 'flex',
  width: 'auto',
  height: '6vh',
  margin: '2vw',
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
  <div style={headerTitleContainerStyle}>
    <div style={textStyle}>{props.text}</div>
  </div>
);

export default HeaderTitle;
