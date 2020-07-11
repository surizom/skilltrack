import React from 'react';
import type { ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Modal from '../modals/common/Modal';
import ModalProvider from '../modals/common/ModalProvider';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

interface Props {
  children?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  childrenContainerStyle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    overflowY: 'auto',
    height: '100%',
  },
  containerStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
  },
}));

const Main: React.FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <ModalProvider>
        <Modal />
        <Box className={classes.containerStyle}>
          <Sidebar />
          <Box className={classes.childrenContainerStyle}>{children}</Box>
        </Box>
      </ModalProvider>
    </>
  );
};

export default Main;
