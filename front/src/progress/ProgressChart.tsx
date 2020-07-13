import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import type { Skill } from '../generated/graphql';
import LoadingComponent from '../common/misc/LoadingComponent';
import ErrorComponent from '../common/misc/ErrorComponent';
import FullPageMessage from '../common/misc/FullPageMessage';
import { SKILLS_PROGRESSION } from './queries';

const useStyles = makeStyles((theme) => ({
  progressChart: { margin: '2vw', display: 'flex' },
}));

const ProgressChart: React.FunctionComponent = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery<{ skills: Skill[] }>(
    SKILLS_PROGRESSION,
  );

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent />;

  if (!data || !data.skills || !data.skills.length) {
    return <FullPageMessage message={'No progression to show'} />;
  }

  return <Box className={classes.progressChart}></Box>;
};

export default ProgressChart;
