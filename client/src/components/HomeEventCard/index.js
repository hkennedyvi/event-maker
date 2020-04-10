import React, {useEffect, useState} from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API";
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

function HomeEventCard(props) {
    const [event, setEvent] = useState({});
    const classes = useStyles();
    const [eventIndex, setEventIndex] = useState(0);
    // const [participants, setParticipants] = useState(props.allEvents[eventIndex].participants);

    useEffect(() => {
        loadNewEvent();
    }, [])

    function loadNewEvent() {
        API.getPostedEvents().then(res => {
            console.log(res);
            setEvent(res.data);
        })
            .catch(err => console.log(err));
    }

    function nextCard() {
        setEventIndex( (eventIndex === props.allEvents.length-1) ? 0 : eventIndex+1 );
    }

    // function joinCount() {
    //     const participantCount = parseFloat(participants);
    //     setParticipants( participantCount === 0 ? 0 : participantCount-1 );
    //     if (participantCount <= 0) {
    //         document.getElementById("join-btn").disabled = true;
    //     }
    // }

    console.log(props.allEvents[0]);

    return (
        <div className="event-card">
            {/* <DialogTitle id="simple-dialog-title">{props.allEvents[0].name} <i className="fas fa-futbol"></i></DialogTitle>
            <h4 id="dialog-location">{props.allEvents[eventIndex].location}</h4>
            <h5 id="dialog-participants"># participants needed: {props.allEvents[eventIndex].participants}</h5>
            <h5 id="dialog-starts">starts NOW</h5>
            <h5 id="dialog-ends">ends in {props.allEvents[eventIndex].duration}</h5>
            <h5 id="dialog-notes">{props.allEvents[eventIndex].notes}</h5>
            <Button id="join-btn" className={classes.root} onClick={props.handleEventJoin}>Join</Button>
            <Button id="next-btn" className={classes.root} onClick={nextCard}>Next Event</Button> */}
        </div>
    )
};

export default HomeEventCard;