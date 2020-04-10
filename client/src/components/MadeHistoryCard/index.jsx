import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css";

const useStyles = makeStyles({
    cards: {
        marginBottom: '2%',
        background: 'linear-gradient(to right top, #051937, #00355b, #005264, #006c4a, #188205);',

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