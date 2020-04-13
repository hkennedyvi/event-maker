import React, { useEffect } from 'react';
import API from '../../utils/API';

function Logout(props) {
   useEffect(() => {
       // logs the user out the login page
   		API.logout();
    }, [])
    return (
        <div>
            Logout
        </div>
    );
};
export default Logout;