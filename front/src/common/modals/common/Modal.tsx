import React, { useContext } from 'react';

import { MODAL, ModalContext } from './ModalProvider';
import SkillCreationModal from '../SkillCreationModal';
import { makeStyles } from '@material-ui/core/styles';

export const MODAL_Z_INDEX = 50;

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    opacity: 0.4,
    overflowX: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: MODAL_Z_INDEX,
  },
}));

const Modal: React.FunctionComponent = () => {
  const modalContext = useContext(ModalContext);

  const classes = useStyles();

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
    <div className={classes.modalContainer} onClick={modalContext.closeModal}>
      {activeModalElement}
    </div>
  );
};

export default Modal;
