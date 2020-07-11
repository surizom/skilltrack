import React, { useContext } from 'react';
import type CSS from 'csstype';
import AddIcon from '@material-ui/icons/Add';
import HeaderTitle from '../common/buttons/HeaderTitle';
import { MODAL, ModalContext } from '../common/modals/common/ModalProvider';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { primary, secondary } from '../common/style/palette';

const style: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'space-between',
  alignItems: 'center',
  justifyContent: 'center',
};

const useStyles = makeStyles((theme) => ({
  createSkillButton: {
    height: '2vh',
    margin: '2vh',
    fontWeight: 'lighter',
    color: secondary,
    marginLeft: 'auto',
  },
}));

const SkillPageHeader: React.FunctionComponent = () => {
  const modalContext = useContext(ModalContext);

  const classes = useStyles();

  return (
    <div style={style}>
      <HeaderTitle text={'Skills'} />
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="primary"
        className={classes.createSkillButton}
        onClick={() => modalContext.openModal(MODAL.SKILL_CREATION)}
      >
        Create Skill
      </Button>
    </div>
  );
};

export default SkillPageHeader;
