import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class MapContainer extends Component {

};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec'
  })(MapContainer);