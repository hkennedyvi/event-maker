import React from 'react';
import CarouselPage from "../Carousel";
import NavBar from "../NavBar";
import "./Wrapper.css";

function Wrapper() {
return (
<div> 
    <CarouselPage className= 'Carousel'></CarouselPage>
    <NavBar className='Navbar'></NavBar>
</div>
)
}

export default Wrapper;