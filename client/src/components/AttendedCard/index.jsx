import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, DialogTitle } from '@material-ui/core';

// Styles
const useStyles = makeStyles((theme) => ({
    cards: {
        marginBottom: theme.spacing(1),
        background: 'linear-gradient(to left top, #051937, #2b275a, #5d2e77, #972d88, #d3208b);',

    },
    details: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
    }
}));

// Main Function
function AttendedCard(props) {
    // Styles
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.cards}>
                <CardContent>
                    <div className="">
                        <DialogTitle id="simple-dialog-title"><strong>{props.name.toUpperCase()}</strong></DialogTitle>
                        <div className={classes.details}>
                            <Typography variant="body1">
                                Category: {props.category.toUpperCase()}
                            </Typography>
                            <Typography variant="body2">
                                Location: {props.location}
                            </Typography>
                            <Typography variant="body2">
                                Length: {props.duration} hours
                            </Typography>

                            {/* Future development: add attendees on the right side of the card */}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AttendedCard;