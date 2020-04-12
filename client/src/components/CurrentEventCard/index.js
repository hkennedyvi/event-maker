import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, DialogTitle } from '@material-ui/core';

// Styles
const useStyles = makeStyles((theme) => ({
    cards: {
        marginBottom: theme.spacing(1),
        background: 'linear-gradient(0.85turn,  rgba(19, 34, 119, 0.9), rgba(231, 51, 156, 0.9), rgba(253, 160, 0, 0.9))',
    },
    details: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
}));

// Main function
function CurrentEventCard(props) {
    // Styles
    const classes = useStyles();

    // Toggles content in case user has no events
    const contentToggler = (props) => {

        if (props.currentEvent.length === 0) {
            return (
                <div className="content">
                    <Typography variant="h4" className="noEvents">
                        No Current Events
                    </Typography>
                    <Typography variant="body1">
                        Return to the Dashboard to find or create an event!
                    </Typography>
                </div>
            )
        } else {
            /* Future development: add attendees on the right side of the card */
            const name = props.currentEvent.name;

            return (
                <div className="content">
                    <DialogTitle id="simple-dialog-title">{name.toUpperCase()} <i className="fas fa-futbol"></i></DialogTitle>
                    <div className={classes.details}>
                        <Typography variant="body1">
                            Category: {props.currentEvent.category}
                        </Typography>
                        <Typography variant="body2">
                            Location: {props.currentEvent.location}
                        </Typography>
                        <Typography variant="body2">
                            Length: {props.currentEvent.duration} hours
                        </Typography>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <Card className={classes.cards}>
                <CardContent>
                    {contentToggler(props)}
                </CardContent>
            </Card>
        </div>
    )
}

export default CurrentEventCard;