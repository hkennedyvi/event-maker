import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Styles
const useStyles = makeStyles(theme => ({
    rootUserInfo: {
        background: 'linear-gradient(to top, #f17b41, #f4624f, #f14861, #e62f75, #d3208b);',
        flexGrow: .5,
        marginRight: '2%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            marginBottom: '3%',
            marginRight: '0%',
            flexGrow: 1,
            background: 'linear-gradient(to right bottom, #f17b41, #f68338, #fa8c2c, #fc961d, #fda000);'
            // background: 'linear-gradient(to left top, #132277, #552788, #882a95, #b92c9b, #e7339c);'
        },
    },
    userInfoCard: {
        margin: '3%',
        flexGrow: 1,
    },
}));

// Main Function
function UserInfo() {
    // Styles
    const classes = useStyles();
    
    return (
        <div className={classes.rootUserInfo}>
            <div className={classes.userInfoCard}>
                <Typography variant="h4" >
                    Name
                </Typography>
                <Typography variant="h6" >
                    Email
                </Typography>
                <Typography >
                    Address
                </Typography>
                <br/>
                <Typography >
                    Created # Events {props.madeEvents}
                </Typography>
                <Typography >
                    Attended # Events {props.attendedEvents}
                </Typography>
            </div>
        </div>
    )
}

export default UserInfo;