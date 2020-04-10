import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    rootUserInfo: {
        backgroundColor: 'white',
        flexGrow: 1,
    },

});

function UserInfo() {
    const classes = useStyles();
    return (
        <div className={classes.rootUserInfo}>
            User info
        </div>
    )
}

export default UserInfo;