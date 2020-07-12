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
    position: 'absolute',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    overflowY: 'auto',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
  },
  containerStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
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
