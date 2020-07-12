import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ProgressChart from './ProgressChart';

const useStyles = makeStyles((theme) => ({
  progressPage: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ProgressPage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.progressPage}>
      <ProgressChart />
    </Box>
  );
};

export default ProgressPage;
