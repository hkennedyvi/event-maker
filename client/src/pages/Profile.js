import React, { useEffect, useState } from 'react';
import API from '../utils/API';

function Profile() {

    const [events, setEvents] = useState({});
    const [user, setUser] = useState("hkenvi@yahoo.com");

    useEffect(() => {
        loadSavedEvents()
    }, [])

    function loadSavedEvents() {

        API.getUserEvents(user).then(res => {
            console.log(user)
            console.log(res);

            // setEvents(res.data);
        })
            .catch(err => console.log(err));
    };

    return (
        <h1>MY PROFILE PAGE</h1>
    )
}

export default Profile;