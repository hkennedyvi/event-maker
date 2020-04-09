import React from 'react';
import MadeHistoryCard from '../MadeHistoryCard';
import AttendedCard from '../AttendedCard';

function HistorySection(props) {
    
    return (
        <div>
            <h1>EVENTS YOU MADE</h1>
            {props.madeEvents.map(event => {
                return (
                    <MadeHistoryCard
                        category={event.category}
                        name={event.name}
                        location={event.location}
                        duration={event.duration}
                    />
                )
            })
            }
            <h1>EVENTS YOU ATTENDED</h1>
            {props.attendedEvents.map(event => {
                return (
                    <AttendedCard
                        category={event.category}
                        name={event.name}
                        location={event.location}
                        duration={event.duration}
                    />
                )
            })
            }
        </div>
    )
}

export default HistorySection;