import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";
import API from '../utils/API';

function Home() {
    // const [event, setEvent] = useState([]);

    // function handlePost(event) {
    //     event.preventDefault();
    //     API.create({ 
    //         category: req.body.category,
    //         name: req.body.name,
    //         location: req.body.location,
    //         participants: req.body.participants,
    //         duration: req.body.duration,
    //         notes: req.body.notes
    //     })
    //     .then(console.log("Event saved to database."))
    //     .catch(err => console.log(err));
    //     console.log(event);
    // };

    return (
        <MapContainer />
    )
}

export default Home;