import React from 'react';

function HistoryCard(props) {
    
    return (
        <div>
           {props.category}
           {props.name}
           {props.location}
           {props.duration}
        </div>
    )
}

export default HistoryCard;