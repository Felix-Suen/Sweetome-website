import React, { Component } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import guides from '../data/guides.json';
import '../App.css';

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
                width="40vw"
                height="40vh"
                mapStyle="mapbox://styles/mapbox/streets-v8"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={MAPBOX_TOKEN}>
                {guides.map(guide => (
                    <Marker key={guide.id} latitude={guide.latitude} longitude={guide.longitude}>
                        <button class="marker-btn" onClick={(e) => 
                            {e.preventDefault();
                            this.setState({ setSelectedTour: guide, selectedTour: guide })}}>
                            <img src={'https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png'} alt="Tours" style={{height: '10px', width: '10px'}}/>
                        </button>
                    </Marker>
                ))}
                
                {this.state.selectedTour ? (
                    <Popup 
                    latitude={this.state.selectedTour.latitude} 
                    longitude={this.state.selectedTour.longitude}
                    onClose={() => 
                        this.setState({ setSelectedTour: null, selectedTour: null })}>
                        <div className="map-popup">
                            <h4>{this.state.selectedTour.lastName}</h4>
                            <h4>{this.state.selectedTour.firstName} </h4>
                            <p>Phone Number: {this.state.selectedTour.contact}</p>
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