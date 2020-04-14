import React, {useEffect, useState} from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API";
import moment from "moment";
import "./style.css";
import AlertDialog from '../ATEST';

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
    const loggedInUser = unescape(document.cookie.split("=")[1]);

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


    function joinCount() {
        // if (window.confirm("Are you sure you would like to join this event?")) {
            window.location.reload(false);
        //   } else {
        //     return;
        //   }
        API.updateParticipants({ _id: props.allEvents[eventIndex]._id , user: loggedInUser}).then( res => {
          
            console.log('Database updated.')
        })
            .catch(err => console.log(err));
    }

    return (
        <div>
        <div className="event-card">
            {props.allEvents && props.allEvents.length > 0 ? 
            <div>
            <DialogTitle><h3>{props.allEvents[eventIndex].name}</h3></DialogTitle>
            <h6>{props.allEvents[eventIndex].location}</h6>
            <h5><strong># participants needed:</strong> {props.allEvents[eventIndex].participants}</h5>
            <h5><strong>started:</strong> {moment(props.allEvents[eventIndex].created_at).format('lll')}</h5>
            <h5><strong>duration:</strong> {props.allEvents[eventIndex].duration}</h5>
            <h6>{props.allEvents[eventIndex].notes}</h6>
            <br></br>
            <AlertDialog
            id="alert"
            joinCount={joinCount} 
            allEvents={props.allEvents}
            eventIndex={eventIndex}
            >Join</AlertDialog>
            <Button id="next-btn" className={classes.root} onClick={nextCard}>Next Event</Button>
            </div>
            : "" 
        }
        </div>
        </div>
    )
};

export default HomeEventCard;