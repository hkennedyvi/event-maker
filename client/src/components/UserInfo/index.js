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
            <p>User info</p>
            <p>What is Lorem Ipsum?</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                
        </div>
    )
}

export default UserInfo;