import React from 'react';

// map library
import {
  Map,
  Marker,
  Popup,
  Polyline,
  TileLayer,
  Tooltip
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
const bikeMarker = require('./../assets/bicycle.svg');

// api calls
const axios = require('axios');

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, error: false, freeBikeStatus: [] };
  }

  componentDidMount = () => {
    axios({
      url: `http://biketownpdx.socialbicycles.com/opendata/free_bike_status.json`
    })
      .then(response => {
        const freeBikeStatus = response.data;
        this.setState({ loading: false, freeBikeStatus: freeBikeStatus });
        console.log(this.state);
      })
      .catch(err => this.setState({ loading: false, error: true }));
  };

  render() {
    const position = [45.51, -122.66];

    let freeBikeMarkers;
    if (this.state.loading === false && this.state.error === false) {
      console.log(this.state.freeBikeStatus);
      const bikeData = this.state.freeBikeStatus.data.bikes;
      freeBikeMarkers = bikeData.map(bike => {
        return (
          <Marker
            position={[bike.lat, bike.lon]}
            title={bike.name}
            icon={L.icon({
              iconUrl: bikeMarker,
              iconSize: [30, 30]
            })}
          >
            <Tooltip>
              <span className={'bike-marker-tooltip'}>{bike.name}</span>
            </Tooltip>
          </Marker>
        );
      });
      console.log(freeBikeMarkers);
    }

    return (
      <Map
        center={position}
        zoom={13}
        minZoom={12}
        maxZoom={17}
        style={{ height: 700, width: 1200 }}
      >
        <TileLayer
          url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        />
        <MarkerClusterGroup
          spiderLegPolylineOptions={{
            weight: 0,
            color: '#222',
            opacity: 0
          }}
          polygonOptions={{ weight: 0, opacity: 0, fill: false }}
          disableClusteringAtZoom={16}
          zoomToBoundsAtClick={false}
        >
          {freeBikeMarkers}
        </MarkerClusterGroup>
      </Map>
    );
  }
}

export default MapContainer;
