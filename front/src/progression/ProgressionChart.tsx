import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progressionChart: { margin: '2vw' },
}));

const ProgressionChart: React.FunctionComponent = () => {
  const classes = useStyles();

  return <Box className={classes.progressionChart}></Box>;
};

export default ProgressionChart;
