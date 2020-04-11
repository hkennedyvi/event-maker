import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    cards: {
        marginBottom: theme.spacing(1),
        background: 'linear-gradient(to right bottom, #051937, #2b275a, #5d2e77, #972d88, #d3208b);',

    },
    details: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
    }
}));

function MadeHistoryCard(props) {
    const classes = useStyles();

    const contentToggler = (props) => {
        console.log("contentToggler props2", props);

        if (props.length === 0) {
            return (
                <div className="content">
                    <Typography variant="h4" className="noEvents">
                        No created Events
                    </Typography>
                </div>
            )
        } else {
            /* Future development: add attendees on the right side of the card */
            return (
                <div className="">
                    <DialogTitle id="simple-dialog-title">{props.name.toUpperCase()} <i className="fas fa-futbol"></i></DialogTitle>
                    <div className={classes.details}>
                        <Typography variant="body1">
                            Category: {props.category.toUpperCase()}
                        </Typography>
                        <Typography variant="body2">

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

export default MadeHistoryCard;