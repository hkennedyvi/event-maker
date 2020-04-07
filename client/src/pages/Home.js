import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";

import CarouselPage from "../components/Carousel";



// import API from '../utils/API';



function Home() {
    const [newEvent, setNewEvent] = useState({});

    function handleChange(event) {
        console.log(event.target.value);
        let category = document.getElementById("category");
        // console.log(category.value);
        let name = document.getElementById("name");
        let location = document.getElementById("location");
        let participants = document.getElementById("participants");
        let duration = document.getElementById("duration");
        let notes = document.getElementById("notes");
        setNewEvent({ 
            category: category.value, 
            name: name.value,
            location: location.value,
            participants: participants.value,
            duration: duration.value,
            notes: notes.value
        });
    }

    function handlePost(event) {
        event.preventDefault();
        // console.log("Hi from post handler");
        // console.log(this);
        console.log(newEvent);
        API.createEvent({ 
            category: "category",
            name: newEvent.name,
            location: newEvent.location,
            participants: 6,
            duration: 2,
            notes: newEvent.notes,
            creator: "email"
        })
        .then(console.log("Event saved to database."))
        .catch(err => console.log(err));
        // console.log(event);
    };

    return (


        <div>
        <CarouselPage/> 
        <MapContainer/>
       </div>

    )

}


export default Home;
