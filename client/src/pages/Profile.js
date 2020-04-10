import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import HistorySection from '../components/HistorySection';
import UserInfo from '../components/UserInfo';


const useStyles = makeStyles({
    rootProfile: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: '12% 2%',
        // If we want the background to not be same height as events, uncomment align-items
        // alignItems: 'flex-start',
    },

});

function Profile() {
    const classes = useStyles();
    const [madeEvents, setMadeEvents] = useState([]);
    const [attendedEvents, setAttendedEvents] = useState([]);
    
    //This variable is a string value of the email for the logged in user
    const loggedInUser = unescape(document.cookie.split("=")[1]);

    useEffect(() => {
        API.isLoggedIn();
        loadSavedEvents();
    }, [])

    function loadSavedEvents() {

        API.getEventsByCreator(loggedInUser).then(res => {

            setMadeEvents(res.data);
        })
            .catch(err => console.log(err));
        API.getEventsByAttendees(loggedInUser).then(res => {
            
            setAttendedEvents(res.data)
        })
    };

    return (
        <div className={classes.rootProfile}>
            <UserInfo />
            <HistorySection madeEvents={ madeEvents } attendedEvents={ attendedEvents } />
        </div>
    )
}

export default Profile;