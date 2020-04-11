import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, DialogTitle } from '@material-ui/core';


const useStyles = makeStyles({
    cards: {
        marginBottom: '2%',
        background: 'linear-gradient(0.85turn,  rgba(19, 34, 119, 0.9), rgba(231, 51, 156, 0.9), rgba(253, 160, 0, 0.9))',
    },
});

function CurrentEventCard(props) {
    const classes = useStyles();

    const contentToggler = (props) => {
        console.log("contentToggler props", props);

        if (props.currentEvent.length === 0) {
            return (
                <div className="content">
                    <Typography variant="h4">
                        No current Events
                    </Typography>
                </div>
            )
        } else {
            /* Future development: add attendees on the right side of the card */
            return (
                <div className="content">
                    <DialogTitle id="simple-dialog-title">{props.currentEvent.name} <i className="fas fa-futbol"></i></DialogTitle>
                    <Typography variant="body1">
                        Category: {props.currentEvent.category}
                    </Typography>
                    <Typography variant="body2">

                    </Typography>
                    <Typography variant="body2">
                        Location: {props.currentEvent.location}
                    </Typography>
                    <Typography variant="body2">
                        Length: {props.currentEvent.duration} hours
                    </Typography>
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