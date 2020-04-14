import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import { Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
    background: 'transparent',
  },
}));

//Main function
function NavBar() {
  // Style
  const classes = useStyles();
  // State
  const [state, setState] = React.useState({
    right: false,
  });

  // Toggle drawer open/shut
  const toggleDrawer = (anchor, open) => (event) => {
    // Can tab over the top of it using tab & shift+tab
    // Will open when selected & user key downs enter
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Switch event with variables used in the drawer list
  const chooseMenuList = text => {
    switch (text.text) {
      case "Dashboard":
        return {
          "redirect": "/home",
          "icon": <RoomOutlinedIcon />
        }
      case "Events":
        return {
          "redirect": "/home",
          "icon": <EventOutlinedIcon />
        }
      case "Profile":
        return {
          "redirect": "/myprofile",
          "icon": <AccountCircleOutlinedIcon />
        }
      case "Logout":
        return {
          "redirect": "/logout",
          "icon": <ExitToAppIcon />
        }
      default:
        return <AdjustOutlinedIcon />
    }
  };

  // Menu List
  // Future development: Move this into its own component
  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* Future development: add events button, linking to an events page, where you can invite people to future events */}
        {['Dashboard',
          // 'Events', 
          'Profile', 'Logout'].map((text, index) => (
            <ListItem button key={text} component="a" href={chooseMenuList({ text }).redirect}>
              <ListItemIcon>{chooseMenuList({ text }).icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Toolbar id='NavBar'>
        <Typography variant="h6" className={classes.title}>
          Cahoots
        </Typography>
        {['right'].map(anchor => (
          <React.Fragment key={anchor}>
            <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(anchor, true)} aria-label="menu">
              <MenuIcon color={classes.title} />
            </IconButton>
            <Drawer className={classes.drawer} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Toolbar>
    </div>
  );
};

export default NavBar;