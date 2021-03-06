import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingComponentContainer: {
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

const LoadingComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loadingComponentContainer}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default LoadingComponent;
