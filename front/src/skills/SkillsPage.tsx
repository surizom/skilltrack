import React from 'react';
import SkillList from './SkillList';
import { SMALL_SCREEN_TRESHLOD } from '../common/style/responsive';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  skillPage: {
    display: 'flex',
    flexDirection: 'column',
    flex: window.innerWidth > SMALL_SCREEN_TRESHLOD ? 1 : undefined,
  },
}));

const SkillsPage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.skillPage}>
      <SkillList />
    </Box>
  );
};

export default SkillsPage;
