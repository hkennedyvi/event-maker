import React from 'react';
import UserCreatedCard from 'react';

function UserCreatedSection(props) {
    console.log("HELLO FROM SECTION");
    console.log(props.events);
    return (
        <div>
           {/* <UserCreatedCard events={props.events} /> */}
        </div>
    )
}

export default UserCreatedSection;