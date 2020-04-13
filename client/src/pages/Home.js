import React, { useEffect, useState, useReducer } from 'react';
import Geocode from "react-geocode";
import MapContainer from "../components/MapContainer";
import CarouselPage from "../components/Carousel";

import API from '../utils/API';

function Home() {
    const [allEvents, setAllEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({});
    const [category, setCategory] = useState();
    const [participants, setParticipants] = useState();
    const [duration, setDuration] = useState();
    const [userLocation, setUserLocation] = useState();

    useEffect(() => {
        API.isLoggedIn();
        loadNewEvent();
    }, [])

    function loadNewEvent() {
        API.getPostedEvents().then(res => {
           
            setAllEvents(res.data);
        })
            .catch(err => console.log(err));
    }


    function handleLocationGrab(currentLocation) {
       
            console.log(currentLocation);
            let eventLat = currentLocation.lat;
            let eventLng = currentLocation.lng;

            Geocode.setApiKey("AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec");

            Geocode.setLanguage("en");

            Geocode.setRegion("es");

            Geocode.enableDebug();

            Geocode.fromLatLng(eventLat, eventLng).then(
                response => {
                    const address = response.results[0].formatted_address;
                    console.log(address);
                    setUserLocation(address);
                },
                error => {
                    console.error(error);
                }
            );
 
    }

    function handleEventJoin(event) {
        console.log("EVENT JOINED")
        console.log(event.target.value)

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
            location: userLocation,
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
            handleEventJoin={handleEventJoin}
            event={newEvent}
            allEvents={allEvents} />
    )

}

export default Home;

