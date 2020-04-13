import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import HistorySection from '../components/HistorySection';
import UserInfo from '../components/UserInfo';

// Styles
const useStyles = makeStyles((theme) => ({
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
        alignItems: 'flex-start',
    },

}));

// Main Function
function Profile() {
    // Styles
    const classes = useStyles();
    // State
    const [madeEvents, setMadeEvents] = useState([]);
    const [attendedEvents, setAttendedEvents] = useState([]);
    const [currentEvent, setCurrentEvent] = useState([]);

    // This variable is a string value of the email for the logged in user
    const loggedInUser = unescape(document.cookie.split("=")[1]);

    // Upon load check if user is logged in then load saved events
    useEffect(() => {
        API.isLoggedIn();
        loadSavedEvents();
    }, [])

    // Load events
    function loadSavedEvents() {

        // Load events made by user
        API.getEventsByCreator(loggedInUser).then(res => {
            setMadeEvents(res.data);
        })
            .catch(err => console.log(err));

        // Load events attended by user
        API.getEventsByAttendees(loggedInUser).then(res => {
            setAttendedEvents(res.data)
        })
            .catch(err => console.log(err));

        // Load last event created or attended by user
        // Filters all events by user into an array
        // If no events created or attended by user, sets state to empty array
        // Else, sets state to last event in the filtered event array
        API.getPostedEvents(loggedInUser).then(res => {
            const attendedOrCreated = async () => {
                let filteredArr = await res.data.filter(event => {
                    return event.creator === loggedInUser || event.attendees.includes(loggedInUser);
                })
                if (filteredArr.length === 0) {
                    setCurrentEvent([])
                } else {
                    setCurrentEvent(filteredArr[filteredArr.length - 1]);
                }
            }
            attendedOrCreated()
        })
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.rootProfile}>
            <UserInfo
                madeEvents={madeEvents.length}
                attendedEvents={attendedEvents.length} />
            <HistorySection currentEvent={currentEvent} madeEvents={madeEvents} attendedEvents={attendedEvents}
            />
        </div>
    )
}

export default Profile;