import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import HistorySection from '../components/HistorySection';

function Profile() {

    const [events, setEvents] = useState([]);
    const [user, setUser] = useState("hkenvi@yahoo.com");

    useEffect(() => {
        loadSavedEvents()
    }, [])

    function loadSavedEvents() {

        API.getEventsByCreator(user).then(res => {
            console.log(user)
            console.log(res.data);

            setEvents(res.data);
        })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <HistorySection events={events} />
        </div>
    )
}

export default Profile;