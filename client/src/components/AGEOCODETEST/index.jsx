// import React from 'react';
// import Geocode from "react-geocode";

// function geocodeTest () {
//     // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// Geocode.setApiKey("AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec");
 
// // set response language. Defaults to english.
// Geocode.setLanguage("en");
 
// // set response region. Its optional.
// // A Geocoding request with region=es (Spain) will return the Spanish city.
// Geocode.setRegion("es");
 
// // Enable or disable logs. Its optional.
// Geocode.enableDebug();
// // {lat: 45.472815000000004, lng: -122.7741112}
//     Geocode.fromLatLng("45.472815000000004", "-122.7741112").then(
//         response => {
//           const address = response.results[0].formatted_address;
//           console.log(address);
//         },
//         error => {
//           console.error(error);
//         }
//       );

//     return (
//         <div>test</div>
//     )
// }

// export default geocodeTest;