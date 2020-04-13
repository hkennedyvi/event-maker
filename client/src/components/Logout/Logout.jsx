import React, { useEffect } from 'react';
import API from '../../utils/API';

function Logout(props) {
   useEffect(() => {
   		API.logout();
    }, [])
    return (
        <div>
            Logout
        </div>
    );
};
export default Logout;