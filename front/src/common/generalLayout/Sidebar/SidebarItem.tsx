import React from 'react';

import { Box, SvgIcon } from '@material-ui/core';
import type { sidebarElementInfo } from './SidebarContent';
import type { History } from 'history';
import { makeStyles } from '@material-ui/core/styles';

interface Props extends sidebarElementInfo {
  history: History;
}

const useStyles = makeStyles((theme) => ({
  sidebarItem: {
    maxWidth: '10vw',
    maxHeight: '12vh',
    margin: '2vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontSize: '2vw',
    alignItems: 'center',
    justifyItems: 'center',
    cursor: 'pointer',
  },
}));

const SidebarItem: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.sidebarItem}
      onClick={() => props.history.push(props.link)}
    >
      <SvgIcon component={props.icon} />
      <div>Skills</div>
    </Box>
  );
};

export default SidebarItem;
