import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";
import CarouselPage from "../components/Carousel";



// import API from '../utils/API';


function Home() {
    // const [event, setEvent] = useState([]);

    function handlePost(event) {
        event.preventDefault();
        // API.create({
        //     category: this.category,
        //     name: this.name,
        //     location: this.location,
        //     participants: this.participants,
        //     duration: this.duration,
        //     notes: this.notes
        // })
        // .then(console.log("Event saved to database."))
        // .catch(err => console.log(err));
        console.log(event);
    };

    return (

        <div>
        <CarouselPage/> 
        <MapContainer handlePost={handlePost}/>
       </div>

    )

}


export default Home;
