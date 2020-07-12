import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progressChart: { margin: '2vw' },
}));

const ProgressChart: React.FunctionComponent = () => {
  const classes = useStyles();

  return <Box className={classes.progressChart}></Box>;
};

export default ProgressChart;
