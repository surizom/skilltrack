import type { OverridableComponent } from '@material-ui/core/OverridableComponent';
import type { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';
import type CSS from 'csstype';
import { primary, quintary, secondary } from '../style/palette';
import React from 'react';
import { SvgIcon } from '@material-ui/core';

interface Props {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}

const bigButtonContainerStyle: CSS.Properties = {
  width: '20vh',
  height: '6vh',
  margin: '2vh',
  borderWidth: '1vh',
  borderRadius: '1vh',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  backgroundColor: primary,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: 'lighter',
  color: secondary,
};

const iconStyle: CSS.Properties = {
  fontSize: '3vh',
  margin: '1vh',
};

const textStyle: CSS.Properties = {
  fontSize: '3vh',
  margin: '1vh',
};

const Bigbutton: React.FunctionComponent<Props> = (props) => (
  <div style={bigButtonContainerStyle}>
    <SvgIcon style={iconStyle} component={props.icon} />
    <div style={textStyle}>{props.text}</div>
  </div>
);

export default Bigbutton;
