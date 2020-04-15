import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import UserImg from './assets/user-image-temporary.png';

// Styles
const useStyles = makeStyles(theme => ({
    rootUserInfo: {
        display: 'flex',
        // background: 'linear-gradient(to top, #f17b41, #f4624f, #f14861, #e62f75, #d3208b);',
        background: 'linear-gradient(to top left, #f17b41, #f68338, #fa8c2c, #fc961d, #fda000);',
        flexGrow: .5,
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            marginRight: 0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow: 1,
            justifyContent: 'center',
            background: 'linear-gradient(to right bottom, #f17b41, #f68338, #fa8c2c, #fc961d, #fda000);',
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            marginRight: 0,
            flexWrap: 'wrap',
            flexGrow: 1,
            justifyContent: 'center',
            background: 'linear-gradient(to right bottom, #f17b41, #f68338, #fa8c2c, #fc961d, #fda000);',
            padding: theme.spacing(3),
        },
    },
    userInfoCard: {
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: 0,
        flexGrow: 1,
        [theme.breakpoints.down('md')]: {
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,  
        },
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 1,

            
        },
    },
    userImageDiv: {
        margin: theme.spacing(1),
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
    },
    userImage: {
        justifyContent: 'center',

    },
}));

// Main Function
function UserInfo(props) {
    // Styles
    const classes = useStyles();

    return (
        <div className={classes.rootUserInfo}>
             <div className={classes.userImageDiv}>
                <img className={classes.userImage} src={UserImg} alt="temporary profile" width="200" />
            </div>
            <div className={classes.userInfoCard}>
                <Typography variant="h4" >
                    Hello,
                </Typography>
                <Typography variant="h5" >
                    {props.user}!
                </Typography>
                {/* <Typography variant="h6" >
                    Email: {props.user}
                </Typography>
                <Typography >
                    Address: 
                </Typography> */}
                <br />
                <Typography >
                    Created {props.madeEvents} Events
                </Typography>
                <Typography >
                    Attended {props.attendedEvents} Events
                </Typography>
            </div>
        </div>
    )
}

export default UserInfo;