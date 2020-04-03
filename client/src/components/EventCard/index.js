import React from "react";
import "./style.css";

function EventCard() {
    return(
        <div className="event-card">
            <h3>Event Title</h3>
            <h4>Event Activity</h4>
            <h5># participants needed</h5>
            <h5>starts NOW</h5>
            <h5>ends 8PM</h5>
            <button>join</button>
        </div>
    )
};

export default EventCard;