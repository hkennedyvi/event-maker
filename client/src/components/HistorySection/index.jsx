import React from 'react';
import HistoryCard from '../HistoryCard';

function HistorySection(props) {
    
    return (
        <div>
            <h1>YOUR EVENT HISTORY</h1>
            {props.events.map(event => {
                return (
                    <HistoryCard
                        category={event.category}
                        name={event.name}
                        location={event.location}
                        duration={event.duration}
                        creator={event.creator}
                    />
                )
            })
            }
        </div>
    )
}

export default HistorySection;