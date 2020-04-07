import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";
import API from '../utils/API';

function Home() {
    const [newEvent, setNewEvent] = useState([]);

    function handleChange(event) {
        console.log(event.target.value);
    }

    function handlePost(event) {
        event.preventDefault();
        // console.log("Hi from post handler");
        // console.log(this);

        API.createEvent({ 
            category: "sports",
            name: "softball",
            location: "park",
            participants: 6,
            duration: 2,
            notes: "it'll be fun!"
        })
        .then(console.log("Event saved to database."))
        .catch(err => console.log(err));
        // console.log(event);
    };

    return (
        <MapContainer handlePost={handlePost} handleChange={handleChange}/>
    )
}

export default Home;