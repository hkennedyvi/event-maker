import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from "../CurrentLocation";
import EventDialog from "../EventDialog";
import EventCard from "../EventCard";

function MapContainer(props) {

    const [mapSettings, setMapSettings] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    });

    const onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
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
                centerAroundCurrentLocation
                google={props.google}
            >
                <Marker onClick={onMarkerClick} name={'current location'} />
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
            <EventDialog handlePost={props.handlePost}/>
            <EventCard />
        </div>
    );

};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec'
})(MapContainer);