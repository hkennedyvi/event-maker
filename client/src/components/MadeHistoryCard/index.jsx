import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css";

function MadeHistoryCard(props) {

    return (
        <div>
            <div className="">
                <DialogTitle id="simple-dialog-title">{props.name} <i className="fas fa-futbol"></i></DialogTitle>
                <h4>{props.location}</h4>
                <h5>{props.duration}</h5>
            </div>
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