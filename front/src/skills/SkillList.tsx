import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SKILLS } from './queries';
import type { Skill } from '../generated/graphql';
import SkillItem from './SkillItem';
import type CSS from 'csstype';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondary } from '../common/style/palette';

const tableIcons: any = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowDownward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn,
};

const useStyles = makeStyles((theme) => ({
  skillListContainer: {
    display: 'flex',
    flexDirection: 'column',
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
        //@ts-ignore
        icons={tableIcons}
      />
    </Box>
  );
};

export default SkillList;
