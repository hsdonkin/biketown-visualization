import React from 'react';

const { serviceArea } = require('./../data').default;

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

// components
import BikeMarker from './BikeMarker';
import ServiceArea from './ServiceArea';
import UserPositionMarker from './UserPositionMarker';

// api calls
const { fetchBikeStatus, fetchStationStatus } = require('./../util');

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      freeBikeStatus: [],
      stationStatus: [],
      currentPosition: null,
      serviceArea,
      windowSize: { height: 600, width: 1200 }
    };
  }

  componentDidMount = () => {
    // get current location if possible
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });

    // find out what height / width to set the map to
    if (
      this.state.windowSize.height != window.innerHeight ||
      this.state.windowSize.width != window.innerWidth
    ) {
      this.setState({
        windowSize: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      });
    }

    Promise.all([fetchBikeStatus, fetchStationStatus])
      .then(responses => {
        const freeBikeStatus = responses[0].data;
        const stationStatus = responses[1].data;
        this.setState({
          loading: false,
          freeBikeStatus: freeBikeStatus,
          stationStatus: stationStatus
        });
        console.log(this.state);
      })
      .catch(err => this.setState({ loading: false, error: true }));
  };

  render() {
    // default map position
    const position = [45.51, -122.66];

    // handle window resize
    window.onresize = e => {
      this.setState({
        windowSize: {
          height: e.currentTarget.innerHeight,
          width: e.currentTarget.innerWidth
        }
      });
    };

    let freeBikeMarkers;
    if (this.state.loading === false && this.state.error === false) {
      const bikeData = this.state.freeBikeStatus.data.bikes;
      freeBikeMarkers = bikeData.map(bike => {
        return <BikeMarker bike={bike} key={bike.id} />;
      });
    }

    let userPositionMarker;
    if (
      this.state.currentPosition != null ||
      this.state.currentPosition != undefined
    ) {
      userPositionMarker = (
        <UserPositionMarker currentPosition={this.state.currentPosition} />
      );
    }

    return (
      <Map
        center={position}
        zoom={13}
        minZoom={12}
        maxZoom={17}
        style={{
          height: this.state.windowSize.height - 75,
          width: this.state.windowSize.width
        }}
      >
        <TileLayer
          url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        />
        <ServiceArea
          coordinates={this.state.serviceArea.polygon.coordinates[0]}
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
        {userPositionMarker}
      </Map>
    );
  }
}

export default MapContainer;
