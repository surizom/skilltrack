import React, { useContext } from 'react';
import type CSS from 'csstype';
import Bigbutton from '../common/buttons/bigbutton';
import AddIcon from '@material-ui/icons/Add';
import HeaderTitle from '../common/buttons/HeaderTitle';
import { MODAL, ModalContext } from '../common/modals/common/ModalProvider';

const style: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'space-between',
  alignItems: 'center',
  justifyContent: 'center',
};

const createSkillButtonStyle: CSS.Properties = {
  display: 'flex',
  marginLeft: 'auto',
};

const SkillPageHeader: React.FunctionComponent = () => {
  const modalContext = useContext(ModalContext);

  return (
    <div style={style}>
      <HeaderTitle text={'Skills'} />
      <div style={createSkillButtonStyle}>
        <Bigbutton
          icon={AddIcon}
          text={'Add a skill'}
          onClick={() => modalContext.openModal(MODAL.SKILL_CREATION)}
        />
      </div>
    </div>
  );
};

export default SkillPageHeader;
