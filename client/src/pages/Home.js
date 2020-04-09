import React, { useEffect, useState } from 'react';
import Geocode from "react-geocode";
import MapContainer from "../components/MapContainer";
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
            // console.log(res);
            setAllEvents(res.data);
        })
            .catch(err => console.log(err));
    }

    function handleLocationGrab(currentLocation) {
        let eventLat = currentLocation.lat;
        let eventLng = currentLocation.lng;
        console.log(currentLocation.lat);
        console.log(currentLocation.lng);
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec");

        // set response language. Defaults to english.
        Geocode.setLanguage("en");

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("es");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();
        // {lat: 45.472815000000004, lng: -122.7741112}
        Geocode.fromLatLng(eventLat, eventLng).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(address);
            },
            error => {
                console.error(error);
            }
        );
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
            event={newEvent}
            allEvents={allEvents} />
    )
}
export default Home;