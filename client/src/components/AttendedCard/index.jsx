import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';

function AttendedCard(props) {

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

export default AttendedCard;