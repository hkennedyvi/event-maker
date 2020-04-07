import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'rgba(46, 34, 68, 1)',
        height: 48,
        padding: '0 30px',
    }
});

function EventCard() {
    const classes = useStyles();

    return (
        <div className="event-card">
            <DialogTitle id="simple-dialog-title">Event Name <i className="fas fa-futbol"></i></DialogTitle>
            <h4>Location</h4>
            <h5># participants needed</h5>
            <h5>starts NOW</h5>
            <h5>ends 8PM</h5>
            <h5>notes notes notes</h5>
            <Button id="join-btn" lassName={classes.root} >Join</Button>
            <Button id="next-btn" className={classes.root} >Next Event</Button>
        </div>
    )
};

export default EventCard;