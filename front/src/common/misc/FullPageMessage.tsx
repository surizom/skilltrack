import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fullPageMessage: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10vh',
    fontWeight: 'bold',
    padding: '5vh',
  },
}));

const FullPageMessage: React.FunctionComponent<{ message: string }> = (
  props,
) => {
  const classes = useStyles();

  return <Box className={classes.fullPageMessage}>{props.message}</Box>;
};

export default FullPageMessage;
