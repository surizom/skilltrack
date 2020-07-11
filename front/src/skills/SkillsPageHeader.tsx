import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import HeaderTitle from '../common/buttons/HeaderTitle';
import { MODAL, ModalContext } from '../common/modals/common/ModalProvider';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { secondary } from '../common/style/palette';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createSkillButton: {
    height: '2vh',
    margin: '2vh',
    fontWeight: 'lighter',
    color: secondary,
    marginLeft: 'auto',
  },
}));

const PageHeader: React.FunctionComponent = () => {
  const modalContext = useContext(ModalContext);

  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <HeaderTitle text={'SkillTrack'} />
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="primary"
        className={classes.createSkillButton}
        onClick={() => modalContext.openModal(MODAL.SKILL_CREATION)}
      >
        Create Skill
      </Button>
    </Box>
  );
};

export default PageHeader;
