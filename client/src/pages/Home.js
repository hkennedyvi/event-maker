import React, { useEffect, useState } from 'react';
import MapContainer from "../components/MapContainer";
import CarouselPage from "../components/Carousel";



import API from '../utils/API';



function Home() {
    const [allEvents, setAllEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({});
    const [category, setCategory] = useState();
    const [participants, setParticipants] = useState();
    const [duration, setDuration] = useState();

    useEffect(() => {
        API.isLoggedIn();
        loadNewEvent();
    }, [])

    function loadNewEvent() {
        API.getPostedEvents().then(res => {
            // console.log(res);
            setAllEvents(res.data);
        })
            .catch(err => console.log(err));
    }

    function handleLocationGrab(currentLocation) {
    //    console.log(currentLocation);
        }

    function handleChange(event) {
        // console.log(event.target.value);
        if (event.target.name == 'category') {
            setCategory(event.target.value);
        }
        let name = document.getElementById("name");
        let location = document.getElementById("location");
        if (event.target.name == 'participants') {
            setParticipants(event.target.value);
        }
        if (event.target.name == 'duration') {
            setDuration(event.target.value);
        }
        let notes = document.getElementById("notes");
        setNewEvent({
            name: name.value,
            location: location.value,
            notes: notes.value
        });
    }


    function handlePost(event) {
        event.preventDefault();
        // console.log("Hi from post handler");
        // console.log(this);
        console.log(newEvent);
        console.log({ 
            category: category,
            name: newEvent.name,
            location: newEvent.location,
            participants: participants,
            duration: duration,
            notes: newEvent.notes,
            creator: "email"
        });
        
        API.createEvent({ 
            category: category,
            name: newEvent.name,
            location: newEvent.location,
            participants: participants,
            duration: duration,
            notes: newEvent.notes,
            creator: "email"
        })
        .then(console.log("Event saved to database."))
        .catch(err => console.log(err));
        // console.log(event);
    };

    return (
        <MapContainer 
        handlePost={handlePost} 
        handleChange={handleChange} 
        handleLocationGrab={handleLocationGrab}
        event={newEvent} 
        allEvents={allEvents}/>
    )

}


export default Home;
