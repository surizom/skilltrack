import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorComponentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.error.main,
    fontSize: '4vh',
    padding: '8vh',
  },
}));

const ErrorComponent: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.errorComponentContainer}>
      <div>An error has occured :(</div>
    </Box>
  );
};

export default ErrorComponent;
