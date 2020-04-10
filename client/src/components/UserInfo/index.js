import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    rootUserInfo: {
        backgroundColor: 'white',
        flexGrow: .5,
        marginRight: '2%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            marginBottom: '2%'
        },
        
    },

}));

function UserInfo() {
    const classes = useStyles();
    return (
        <div className={classes.rootUserInfo}>
            <p>User info</p>
            <p>What is Lorem Ipsum?</p>
            <p>Lorem Ipsum is simply dummy text of the </p>
            <p>printing and typesetting industry. </p>
                
        </div>
    )
}

export default UserInfo;