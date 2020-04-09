import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import HistorySection from '../components/HistorySection';

function Profile() {

    const [madeEvents, setMadeEvents] = useState([]);
    const [attendedEvents, setAttendedEvents] = useState([]);
    const [user, setUser] = useState("hkenvi@yahoo.com");

    useEffect(() => {
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
        <div>
            <HistorySection madeEvents={ madeEvents } attendedEvents={ attendedEvents } />
        </div>
    )
}

export default Profile;