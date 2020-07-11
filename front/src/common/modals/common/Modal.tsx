import React, { useContext, useEffect, useMemo, useState } from 'react';
import type CSS from 'csstype';
import { blackBackground } from '../../style/palette';
import { MODAL, ModalContext } from './ModalProvider';
import SkillCreationModal from '../SkillCreationModal';

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
  const modalContext = useContext(ModalContext);

  let activeModalElement;

  switch (modalContext.openedModal) {
    case MODAL.SKILL_CREATION:
      activeModalElement = <SkillCreationModal />;
      break;
    default:
      activeModalElement = null;
  }

  if (activeModalElement === null) {
    return null;
  }

  return (
    <div style={modalContainerStyle} onClick={modalContext.closeModal}>
      {activeModalElement}
    </div>
  );
};

export default Modal;
