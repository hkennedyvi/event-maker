import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css";

const useStyles = makeStyles({
    cards: {
        marginBottom: '2%',
        background: 'linear-gradient(to right top, #d3208b, #b8298c, #9d2f8b, #833286, #69337e, #513e87, #34468b, #004c8a, #005d90, #006b85, #007570, #007d56);',

    },

});

// #D3208B, 49316F, 007D56
function MadeHistoryCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.cards}>
                <CardContent>
            <div className="">
                <DialogTitle id="simple-dialog-title">{props.name} <i className="fas fa-futbol"></i></DialogTitle>
                <h4>{props.location}</h4>
                <h5>{props.duration}</h5>
            </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default MadeHistoryCard;

{/* <div>
            <Typography variant="h6">
            {props.category.toUpperCase()}: {props.name.toUpperCase()}
           </Typography>
           <Typography variant="body1">
           
           </Typography>
           <Typography variant="body2">
                
           </Typography>
           <Typography variant="body2">
                at {props.location}
           </Typography>
           <Typography variant="body2">
                for {props.duration} hours
           </Typography>
           
        </div> */}