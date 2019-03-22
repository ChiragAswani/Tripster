import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, Polyline} from 'google-maps-react';
import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }
    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {

        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
        this.setState({address})
    };
    render() {
        // const triangleCoords = [
        //     {lat: 37.759703, lng: -122.428093},
        //     {lat: 37.7614169, lng: -122.4240931},
        //
        // ];
        const triangleCoords = [
            {lat: 37.759703, lng: -122.428093},
            {lat: 37.7612896, lng: -122.4283997},
            {lat: 37.7615595, lng: -122.4241079},
            {lat: 37.7614169, lng: -122.4240931},

        ];

        return (
            <div>

                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Origin',
                                    className: 'location-search-input',
                                })}
                                style={{'width': '100%'}}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                <button>Calculate</button>
                <Map google={this.props.google} zoom={14}>
                    <Marker
                        name={'Dolores park'}
                        position={{lat: 37.759703, lng: -122.428093}} />
                    <Marker
                        name={'Tartine Bakery'}
                        position={{lat: 37.7614169, lng: -122.4240931}} />


                    <Polyline
                        path={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={4}
                        strokeWeight={10} />
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyChbG4vc4a01alWP7RYrMvWd911uhGzOdo\n")
})(MapContainer)
