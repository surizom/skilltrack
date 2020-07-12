import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SKILLS } from './queries';
import type { Skill, SkillImportance } from '../generated/graphql';
import MaterialTable, { Icons } from 'material-table';
import { tableIcons } from '../common/style/dataTableIcons';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MODAL, ModalContext } from '../common/modals/common/ModalProvider';
import { Add, CallMade } from '@material-ui/icons';
import { formatEnum, openExternalLink } from '../common/util/utils';
import LoadingComponent from '../common/misc/LoadingComponent';
import ErrorComponent from '../common/misc/ErrorComponent';
import FullPageMessage from '../common/misc/FullPageMessage';

const useStyles = makeStyles((theme) => ({
  skillListContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2vw',
  },
}));

const renderImportance = (skill: Skill) => formatEnum(skill.importance.label);

const SkillList: React.FunctionComponent = () => {
  const classes = useStyles();

  const modalContext = useContext(ModalContext);

  const { loading, error, data } = useQuery<{ skills: Skill[] }>(SKILLS);

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent />;

  if (!data || !data.skills || !data.skills.length) {
    return <FullPageMessage message={'No skills to show'} />;
  }

  return (
    <Box className={classes.skillListContainer}>
      <MaterialTable
        columns={[
          { title: 'Skill', field: 'name' },
          {
            title: 'Importance',
            field: 'importance',
            render: renderImportance,
            customSort: (a, b) => a.importance.value - b.importance.value,
          },
        ]}
        data={data.skills}
        title="Skills"
        icons={tableIcons}
        actions={[
          {
            icon: Add,
            tooltip: 'Add Skill',
            isFreeAction: true,
            onClick: (event) => modalContext.openModal(MODAL.SKILL_CREATION),
          },
          (rowData) => ({
            icon: CallMade,
            tooltip: 'Go to resource',
            disabled: !rowData.resourceUrl,
            onClick: (event) =>
              openExternalLink(rowData.resourceUrl ?? 'about:blank'),
          }),
        ]}
      />
    </Box>
  );
};

export default SkillList;
