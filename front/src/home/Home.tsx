import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: '10vh',
    fontWeight: 'bold',
    padding: '5vh',
    textAlign: 'center',
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home} color="primary">
      Welcome to SkillTrack !
    </Box>
  );
};

export default Home;
