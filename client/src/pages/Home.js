import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";
<<<<<<< HEAD
import CarouselPage from "../components/Carousel";



// import API from '../utils/API';
=======
import API from '../utils/API';
>>>>>>> d030f2beedcaf21f2b0db0372b93329a8fb69527


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
<<<<<<< HEAD

        <div>
        <CarouselPage/> 
        <MapContainer handlePost={handlePost}/>
       </div>

=======
        <MapContainer />
>>>>>>> d030f2beedcaf21f2b0db0372b93329a8fb69527
    )

}


export default Home;
