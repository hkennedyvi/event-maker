import React from 'react';
import { Typography } from '@material-ui/core';

function HistoryCard(props) {


    
    return (
        <div>
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
           
        </div>
    )
}

export default HistoryCard;