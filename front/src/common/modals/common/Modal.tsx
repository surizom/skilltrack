import React, { useContext } from 'react';

import { MODAL, ModalContext } from './ModalProvider';
import SkillCreationModal from '../SkillCreationModal';
import { makeStyles } from '@material-ui/core/styles';

export const MODAL_Z_INDEX = 50;

const Modal: React.FunctionComponent = () => {
  const modalContext = useContext(ModalContext);


  switch (modalContext.openedModal) {
    case MODAL.SKILL_CREATION:
      return (
        <SkillCreationModal
          isOpen={true}
          handleClose={modalContext.closeModal}
        />
      );
    default:
      return null;
  }
};

export default Modal;
