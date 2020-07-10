import React from 'react';
import type CSS from 'csstype';
import { blackBackground } from '../style/palette';

export const MODAL_Z_INDEX = 50;

const modalContainerStyle: CSS.Properties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundColor: blackBackground,
  opacity: 0.4,
  overflowX: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: MODAL_Z_INDEX,
};

const Modal: React.FunctionComponent = () => {
  const displayModal = false;
  return displayModal ? <div style={modalContainerStyle}></div> : null;
};

export default Modal;
