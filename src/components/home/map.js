import React, { Component } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import '../../App.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGJvb2JvbyIsImEiOiJjazYzYmUyeWEwNmNiM2xwZzd5NDg5ajljIn0.F5tgToY70jIZEN0jB51zJQ'; // Set your mapbox token here

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 49.2,
                longitude: -123.1207,
                zoom: 10,
                bearing: 0,
                pitch: 0
            },
            selectedTour: null,
            setSelectedTour: null
        };
    }

    render() {
        return (
            <div>
                <MapGL
                    {...this.state.viewport}
                    width="60vw"
                    height="50vh"
                    mapStyle="mapbox://styles/mapbox/streets-v8"
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={MAPBOX_TOKEN}>
                    <Marker key={1} latitude={49.193925} longitude={-123.102338}>
                        <button class="marker-btn" onClick={(e) => {
                            e.preventDefault();
                            this.setState({ setSelectedTour: true, selectedTour: true })
                        }}>
                            <img src={'https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png'} alt="Tours" style={{ height: '10px', width: '10px' }} />
                        </button>
                    </Marker>

                    {this.state.selectedTour ? (
                        <Popup
                            latitude={49.193925}
                            longitude={-123.102338}
                            onClose={() =>
                                this.setState({ setSelectedTour: null, selectedTour: null })}>
                            <div className="map-popup">
                                <h4>Sweetome Rental</h4>
                                <h4>Unit 218 - 2688 Shell Road </h4>
                                <p>Phone Number: 604-233-0508</p>
                            </div>
                        </Popup>
                    ) : null}
                </MapGL>
            </div>
        );
    }
}

document.body.style.margin = 10;
export default Map