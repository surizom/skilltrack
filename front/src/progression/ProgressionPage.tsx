import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ProgressionChart from './ProgressionChart';

const useStyles = makeStyles((theme) => ({
  progressionPage: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ProgressionPage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.progressionPage}>
      <ProgressionChart />
    </Box>
  );
};

export default ProgressionPage;
