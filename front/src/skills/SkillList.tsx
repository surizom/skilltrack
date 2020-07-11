import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SKILLS } from './queries';
import type { Skill } from '../generated/graphql';
import MaterialTable, { Icons } from 'material-table';
import { tableIcons } from '../common/style/dataTableIcons';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  skillListContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2vw',
  },
}));

const SkillList: React.FunctionComponent = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery<{ skills: Skill[] }>(SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (!data || !data.skills || !data.skills.length) {
    return <div>No skills to show</div>;
  }

  return (
    <Box className={classes.skillListContainer}>
      <MaterialTable
        columns={[
          { title: 'Skill', field: 'name' },
          { title: 'Importance', field: 'importance' },
        ]}
        data={data.skills}
        title="Skills"
        icons={tableIcons}
      />
    </Box>
  );
};

export default SkillList;
