import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css";

function EventCard() {
    return(
        <div className="event-card">
            <DialogTitle id="simple-dialog-title">Event Name</DialogTitle>
            <h4>Event category</h4>
            <h5># participants needed</h5>
            <h5>starts NOW</h5>
            <h5>ends 8PM</h5>
            <button className="join-btn">join</button>
            <button className="next-btn">next event</button>
        </div>
    )
};

export default EventCard;