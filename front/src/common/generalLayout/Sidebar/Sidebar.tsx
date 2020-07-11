import React, { useContext } from 'react';
import { primary } from '../../style/palette';
import SidebarItem from './SidebarItem';
import { sidebarElements } from './SidebarContent';
import { useHistory } from 'react-router';
import { Box, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { DarkModeContext } from '../../style/darkMode';
import { makeStyles } from '@material-ui/core/styles';

export const SIDEBAR_WIDTH = '14vw';

const useStyles = makeStyles((theme) => ({
  sidebarStyle: {
    maxWidth: SIDEBAR_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    backgroundColor: primary,
    alignItems: 'center',
  },
  darkModeSwitch: {
    marginTop: 'auto',
  },
}));

const Sidebar: React.FunctionComponent = () => {
  const history = useHistory();

  const classes = useStyles();

  const darkModeContext = useContext(DarkModeContext);

  return (
    <Box className={classes.sidebarStyle}>
      {sidebarElements().map((element) => (
        <SidebarItem history={history} {...element} key={element.name} />
      ))}
      <FormGroup className={classes.darkModeSwitch}>
        <FormControlLabel
          control={
            <Switch
              checked={darkModeContext.themeColor === 'light'}
              onChange={darkModeContext.switchThemeColor}
            />
          }
          labelPlacement="bottom"
          label="Dark Mode"
        />
      </FormGroup>
    </Box>
  );
};
export default Sidebar;
