import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './NavBar.css';
import { Toolbar, Typography, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color: '#009688'
    },
    text: {
        color: '#009688',
    },
    list: {
        width: 250,
      },
  }));

function NavBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
        // Can tab over the top of it using tab & shift+tab
        // Will open when selected & user key downs enter
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const chooseMenuList = text => {
        
        switch (text.text) {
            case "Dashboard": 
                return {
                    "redirect": "/home",
                    "icon": <RoomOutlinedIcon />
                }
            case "Events":
                return {
                    // Future development: need to update file path when available
                    "redirect": "/home",
                    "icon": <EventOutlinedIcon />
                }
            case "Profile":
                return {
                    // Future development: need to update file path when available
                    "redirect": "/home",
                    "icon": <AccountCircleOutlinedIcon />
                }
            case "Logout":
                // Need to add code for logging out. Maybe not here...?
                return {
                    "redirect": "/",
                    "icon": <ExitToAppIcon />
                }
            default:
                return <AdjustOutlinedIcon />
        }
    };

    // I would like to turn this into another component if possible
    const list = (anchor) => (
        <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {/* Events will be for future development */}
        {['Dashboard', 'Events', 'Profile',].map((text, index) => (
          <ListItem button key={text} component="a" href={chooseMenuList({text}).redirect}>
            <ListItemIcon>{chooseMenuList({text}).icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem button key={text} component="a" href={chooseMenuList({text}).redirect} >
            <ListItemIcon>{chooseMenuList({text}).icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
    )

    return (
        <div className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Logo Here
                    </Typography>
                    {['right'].map(anchor => (
                    <React.Fragment key={anchor}>
                    <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(anchor, true)} aria-label="menu">
                        <MenuIcon color={classes.title} />
                    </IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                    </React.Fragment>
                    ))}
                </Toolbar>
        </div>
    )
};

export default NavBar;