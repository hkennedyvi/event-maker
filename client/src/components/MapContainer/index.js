import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from "../CurrentLocation";
import FormDialog from "../EventDialog";
import EventCard from "../HomeEventCard";

function MapContainer(props) {

    const [mapSettings, setMapSettings] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    });

    // const onMarkerClick = (props, marker, e) =>
    //     this.setState({
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWindow: true
    //     });

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
            <FormDialog handlePost={props.handlePost} handleChange={props.handleChange}/>
            <EventCard event={props.event} allEvents={props.allEvents}/>
        </div>
    );

};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec'
})(MapContainer);