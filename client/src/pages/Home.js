import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";
import API from '../utils/API';

function Home() {
    // const [event, setEvent] = useState([]);

    function handlePost(event) {
        event.preventDefault();
        API.createEvent({ 
            category: event.category,
            name: event.name,
            location: event.location,
            participants: event.participants,
            duration: event.duration,
            notes: event.notes
        })
        .then(console.log("Event saved to database."))
        .catch(err => console.log(err));
        console.log(event);
    };

    return (
        <MapContainer handlePost={handlePost}/>
    )
}

export default Home;