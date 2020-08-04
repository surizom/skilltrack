import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import type { Skill } from '../generated/graphql';
import LoadingComponent from '../common/misc/LoadingComponent';
import ErrorComponent from '../common/misc/ErrorComponent';
import FullPageMessage from '../common/misc/FullPageMessage';
import { SKILLS_PROGRESSION } from './queries';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  progressChart: {
    margin: '2vw',
    display: 'flex',
    width: 'auto',
    height: 'auto',
  },
  chartColor: {
    background: theme.palette.background.default,
  },
}));

const stringToColour = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var j = 0; j < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

const ProgressChart: React.FunctionComponent = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery<{ skills: Skill[] }>(
    SKILLS_PROGRESSION,
  );

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent />;

  if (
    !data ||
    !data.skills ||
    !data.skills.length ||
    !data.skills[0].evaluationChart
  ) {
    return <FullPageMessage message={'No progression to show'} />;
  }

  const labels = data.skills[0].evaluationChart.dateLabels.map((label) => {
    const day = label.charAt(6) + label.charAt(7);
    const month = label.charAt(4) + label.charAt(5);
    return day + '/' + month;
  });

  const datasets = data.skills.map((skill) => {
    return {
      data: skill.evaluationChart.skillLevels,
      label: skill.name,
      backgroundColor: stringToColour(skill.name),
    };
  });

  console.log('datasets');
  console.log(datasets);

  console.log('labels');
  console.log(labels);

  return (
    <Box className={classes.progressChart}>
      <Line
        height={500}
        width={700}
        data={{
          labels,
          datasets,
        }}
      />
    </Box>
  );
};

export default ProgressChart;
