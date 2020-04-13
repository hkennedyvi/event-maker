import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cards: props => ({
        marginBottom: theme.spacing(1),
        background: props.background,
    }),
    details: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
    }

}));

function NoHistoryCard(props) {
    const classes = useStyles(props);

    return (
        <div>
            <Card className={classes.cards}>
                <CardContent>
                    <div className={classes.details}>
                        <Typography variant="h4">
                            No {props.eventType}
                        </Typography>
                        <Typography variant="body1">
                            Return to the Dashboard to find or create an event!
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoHistoryCard;