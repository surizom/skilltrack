import React, { useContext } from 'react';
import { sidebarElements } from './SidebarContent';
import { useHistory } from 'react-router';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Switch,
  useTheme,
} from '@material-ui/core';
import { DarkModeContext } from '../../style/darkMode';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

export const SIDEBAR_WIDTH = '14vw';

const useStyles = makeStyles((theme) => ({
  sidebarStyle: {
    maxWidth: SIDEBAR_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    alignItems: 'center',
  },
  darkModeSwitch: {
    marginTop: 'auto',
  },
  darkModeLabel: {
    fontSize: '2vh',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
    marginLeft: SIDEBAR_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: '10vh',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: SIDEBAR_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: SIDEBAR_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerBottomElements: {
    marginTop: 'auto',
  },
}));

const Sidebar: React.FunctionComponent = () => {
  const history = useHistory();

  const theme = useTheme();

  const classes = useStyles();

  const darkModeContext = useContext(DarkModeContext);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sidebarElements().map((element) => (
            <ListItem
              button
              key={element.name}
              onClick={() => history.push(element.link)}
            >
              <ListItemIcon>
                <SvgIcon component={element.icon} />
              </ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.drawerBottomElements}>
          <ListItem button key="darkModeSwitch">
            <ListItemIcon>
              <Switch
                checked={darkModeContext.themeColor === 'dark'}
                onChange={darkModeContext.switchThemeColor}
              />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default Sidebar;
