import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from "../CurrentLocation";
import FormDialog from "../EventDialog";
import HomeEventCard from "../HomeEventCard";

function MapContainer(props) {

    const [mapSettings, setMapSettings] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    });

    const onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    return (
        <div>
            <CurrentLocation
                handleLocationGrab={props.handleLocationGrab}
                centerAroundCurrentLocation
                google={props.google}
            >
                <Marker name={'current location'} />
                <InfoWindow
                    marker={mapSettings.activeMarker}
                    visible={mapSettings.showingInfoWindow}
                    onClose={onClose}
                >
                    <div>
                        <h4>{mapSettings.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation>
            <FormDialog handlePost={props.handlePost} handleChange={props.handleChange} />
            <HomeEventCard
                event={props.event}
                allEvents={props.allEvents}
                handleEventJoin={props.handleEventJoin} 
                />
        </div>
    );

};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec'
})(MapContainer);