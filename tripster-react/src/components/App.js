import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import 'antd/dist/antd.css';
import querystring from 'querystring';
import { Input, Button, Radio, Card, Checkbox, Select } from 'antd';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import '../stylesheets/App.css'
import request from 'request'

const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            origin_address: '',
            destination_address: '',
            origin_obj: {},
            destination_obj: {},
            stops: [],
            addition_markers: undefined,
            sort_by: 'best_match',
            price: 1,
            waypoints: []
        };
    }
    handleChangeOrigin = origin_address => {
        this.setState({
            origin_address
        });
    };

    handleSelectOrigin = origin_address => {
        geocodeByAddress(origin_address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({origin_obj : latLng}))
            .catch(error => console.error('Error', error));
        this.setState({origin_address})
    };

    handleChangeDestination = destination_address => {
        this.setState({
            destination_address
        });
    };

    handleSelectDestination = destination_address => {
        geocodeByAddress(destination_address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({destination_obj: latLng}))
            .catch(error => console.error('Error', error));
        this.setState({destination_address})
    };

    calculate_distance() {
        const DirectionsService = new this.props.google.maps.DirectionsService();
        DirectionsService.route({
            origin: this.state.origin_address,
            destination: this.state.destination_address,
            waypoints: this.state.waypoints,
            optimizeWaypoints: true,
            travelMode: this.props.google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            var bounds = new this.props.google.maps.LatLngBounds();
            try{
                const all_steps = (result.routes[0].overview_path)
                for (let step in all_steps){
                    let current_step_json = all_steps[step].toJSON()
                    bounds.extend(current_step_json);
                }
                this.setState({'steps': result.routes[0].overview_path, bounds})
            } catch (e){
                console.log("ERR")
            }
        });


        var options = { method: 'GET',
            url: 'http://localhost:8888/calculate-distance',
            qs: {
                origin_lat: this.state.origin_obj.lat,
                origin_lng: this.state.origin_obj.lng,
                destination_lat: this.state.destination_obj.lat,
                destination_lng: this.state.destination_obj.lng,
                sort_by: this.state.sort_by,
                price: this.state.price,
                stops: this.state.stops
            },
            headers:
                { 'Postman-Token': '172aa67b-54c6-4116-9000-9a22e9480045',
                    'cache-control': 'no-cache' } };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            var json = body;
            var json_stops = JSON.parse(json).stops;

            const additional_markers = json_stops.map((stop) =>
                <Marker
                    key={stop.image_url}
                    position={{lat: stop.coordinates.latitude, lng: stop.coordinates.longitude}}
                    onClick={() => this.setWayPoint(stop.coordinates.latitude, stop.coordinates.longitude)}
                />
            );
            this.setState({additional_markers})

        }.bind(this));
    }

    //redirects you to the login page for Spotify
    //only works if you are currently not logged into Spotify.
    login() {
        const generateRandomString = function (length) {
            let text = '';
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (let i = 0; i < length; i += 1) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };

        const state = generateRandomString(16);
        const scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative';
        window.open(`https://accounts.spotify.com/authorize?${
            querystring.stringify({
                response_type: 'code',
                client_id: '682367fe3a8a41a0b81f34dc5c6fe936',
                scope,
                redirect_uri: 'http://localhost:3000/' ,
                state})
            })}`, '_self');


    }

    setWayPoint(lat, lng){
        this.setState({waypoints:[...this.state.waypoints, {
                location: new this.props.google.maps.LatLng(lat,lng),
                stopover: true
            }]});
        this.calculate_distance()
    }

    render() {
        const tripster_stops = [
            { label: 'Active Life', value: 'Active Life' },
            { label: 'Arts & Entertainment', value: 'Arts & Entertainment' },
            { label: 'Nightlife', value: 'Nightlife' },
            { label: 'Restaurants', value: 'Restaurants' },
            { label: 'Hotels & Travel', value: 'Hotels & Travel' },
        ];
        return (
            <div class="flex-container">

                <div class="flex-container-div-left">
                    <h1>Tripster</h1>
                <PlacesAutocomplete
                    value={this.state.origin_address}
                    onChange={this.handleChangeOrigin}
                    onSelect={this.handleSelectOrigin}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <Input
                                {...getInputProps({
                                    placeholder: 'Origin',
                                    className: 'location-search-input',
                                })}
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

                <PlacesAutocomplete
                    value={this.state.destination_address}
                    onChange={this.handleChangeDestination}
                    onSelect={this.handleSelectDestination}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <Input
                                {...getInputProps({
                                    placeholder: 'Destination',
                                    className: 'location-search-input',
                                })}
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
                    <br/>
                    <Card
                        title="Tripster Stops"
                    >
                        <CheckboxGroup
                            options={tripster_stops}
                            onChange={stops => this.setState({stops})}
                        />
                        <a className={"sort-by"}>Sort By: </a>

                        <Select defaultValue={"best_match"} style={{width: 150}} max={51} onChange={(sort_by) => this.setState({sort_by})}>
                            <Option value="best_match">Best Match</Option>
                            <Option value="rating">Rating</Option>
                            <Option value="review_count">Review Count</Option>
                            <Option value="distance">Distance</Option>
                        </Select>

                        <br/>

                        <Radio.Group defaultValue="1" buttonStyle="solid" onChange={price => this.setState({price: price.target.value})}>
                            <Radio.Button value="1">$</Radio.Button>
                            <Radio.Button value="2">$$</Radio.Button>
                            <Radio.Button value="3">$$$</Radio.Button>
                            <Radio.Button value="4">$$$</Radio.Button>
                        </Radio.Group>

                        <Button
                            type="primary"
                            onClick={() => this.calculate_distance()}
                            className={"calculate-button"}
                        >
                            Calculate
                        </Button>

                    </Card>

                    <Button type="primary" onClick={() => this.calculate_distance()}>Calculate</Button>
                    <Button type="primary" onClick={() => this.login()}>Spotifunk</Button>

                </div>

                <div class="flex-container-div-right">

                    <Map className="googlemaps" google={this.props.google} zoom={5} bounds={this.state.bounds} center={{lat: this.state.origin_obj.lat, lng: this.state.origin_obj.lng}}>
                        <Marker
                            position={{lat: this.state.origin_obj.lat, lng: this.state.origin_obj.lng}} />
                        <Marker
                            position={{lat: this.state.destination_obj.lat, lng: this.state.destination_obj.lng}} />
                        {this.state.additional_markers}
                        <Polyline
                            path={this.state.steps}
                            geodesic={false}
                            strokeColor="#0000FF"
                            strokeOpacity={4}
                            strokeWeight={10}
                        />
                    </Map>

                </div>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyChbG4vc4a01alWP7RYrMvWd911uhGzOdo")
})(MapContainer)
