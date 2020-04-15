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
    
    return (
        <div>
            <Card className={classes.cards}>
                <CardContent>
                    <div className="content">
                        <DialogTitle id="simple-dialog-title"><strong>{props.name.toUpperCase()}</strong></DialogTitle>
                        <div className={classes.details}>
                            <Typography variant="body1">
                                Category: {props.category}
                            </Typography>
                            <Typography variant="body2">
                                Location: {props.location}
                            </Typography>
                            {/* <Typography variant="body2">
                                Started: {props.created_at}
                            </Typography> */}
                            <Typography variant="body2">
                                Duration: {props.duration}
                        </Typography>
                        </div>
                        {/* Future development: add attendees on the right side of the card */}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CurrentEventCard;