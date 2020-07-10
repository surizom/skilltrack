import React, { createContext, ReactNode, useState } from 'react';

interface Props {
  children?: ReactNode;
}

interface ModalContextProps {
  openedModal: MODAL | null;
  openModal: (modal: MODAL) => void;
  closeModal: () => void;
}

export enum MODAL {
  SKILL_CREATION = 'SkillCreationModal',
}

const DEFAULT_CALLBACK = (param?: any) => {};

const INITIAL_CONTEXT_VALUE: ModalContextProps = {
  openedModal: null,
  openModal: DEFAULT_CALLBACK,
  closeModal: DEFAULT_CALLBACK,
};

export const ModalContext = createContext<ModalContextProps>(
  INITIAL_CONTEXT_VALUE,
);

const ModalProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [openedModal, setOpenedModal] = useState<MODAL | null>(null);
  const openModal = (modal: MODAL) => {
    setOpenedModal(modal);
  };
  const closeModal = () => {
    setOpenedModal(null);
  };
  return (
    <ModalContext.Provider value={{ openedModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
