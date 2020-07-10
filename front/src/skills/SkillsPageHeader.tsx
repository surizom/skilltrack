import React from 'react';
import type CSS from 'csstype';
import Bigbutton from '../common/buttons/bigbutton';
import AddIcon from '@material-ui/icons/Add';
import HeaderTitle from '../common/buttons/HeaderTitle';

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
  return (
    <div style={style}>
      <HeaderTitle text={'Skills'} />
      <div style={createSkillButtonStyle}>
        <Bigbutton icon={AddIcon} text={'Add a skill'} />
      </div>
    </div>
  );
};

export default SkillPageHeader;
