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
        let category = document.getElementById("category");
        console.log(category.value);
        let location = document.getElementById("location");
        let name = document.getElementById("name");
        let notes = document.getElementById("notes");
        console.log(location.value);
        API.createEvent({ 
            category: "sports",
            name: name.value,
            location: location.value,
            participants: 6,
            duration: 2,
            notes: notes.value
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