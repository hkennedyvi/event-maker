import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import HistorySection from '../components/HistorySection';
import UserInfo from '../components/UserInfo';


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

function Profile() {
    const classes = useStyles();
    const [madeEvents, setMadeEvents] = useState([]);
    const [attendedEvents, setAttendedEvents] = useState([]);
    const [currentEvent, setCurrentEvent] = useState([]);
    
    //This variable is a string value of the email for the logged in user
    const loggedInUser = unescape(document.cookie.split("=")[1]);

    console.log("loggedInUser", loggedInUser); 

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
        });

        API.getPostedEvents(loggedInUser).then( res => {
            console.log("got events");
            console.log("res", res);
            const attendedOrCreated = async () => {
                let filteredArr = await res.data.filter( event => {
                    return event.creator === loggedInUser || event.attendees.includes(loggedInUser);
                })
                console.log('filteredArr', filteredArr);
                console.log('last index', filteredArr[filteredArr.length - 1]);
                setCurrentEvent(filteredArr[filteredArr.length - 1]);
            }
            attendedOrCreated()
        })
            .catch(err => console.log(err));
    };
    
    return (
        <div className={classes.rootProfile}>
            <UserInfo />
            <HistorySection currentEvent={currentEvent} madeEvents={madeEvents} attendedEvents={attendedEvents} />
        </div>
    )
}

export default Profile;