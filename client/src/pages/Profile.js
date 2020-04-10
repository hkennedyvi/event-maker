import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import HistorySection from '../components/HistorySection';
import UserInfo from '../components/UserInfo';


const useStyles = makeStyles( (theme) => ({
    rootProfile: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: '2% 12%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            margin: '2%'
        },
        // If we want the background to not be same height as events, uncomment align-items
        // alignItems: 'flex-start',
    },

}));

function Profile() {
    const classes = useStyles();
    const [madeEvents, setMadeEvents] = useState([]);
    const [attendedEvents, setAttendedEvents] = useState([]);
    const [user, setUser] = useState("hkenvi@yahoo.com");

    useEffect(() => {
        API.isLoggedIn();
        loadSavedEvents()
    }, [])

    function loadSavedEvents() {

        API.getEventsByCreator(user).then(res => {

            setMadeEvents(res.data);
        })
            .catch(err => console.log(err));
        API.getEventsByAttendees(user).then(res => {
            console.log("hello");
            console.log(res.data);
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