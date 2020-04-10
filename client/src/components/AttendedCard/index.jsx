import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';

function AttendedCard(props) {

    return (
        <div>
            <Card>
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

export default AttendedCard;