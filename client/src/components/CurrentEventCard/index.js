import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, DialogTitle } from '@material-ui/core';


const useStyles = makeStyles({
    cards: {
        marginBottom: '2%',
        

    },

});

function CurrentEventCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.cards}>
                <CardContent>
                    <div className="">
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

                        {/* Future development: add attendees on the right side of the card */}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CurrentEventCard;