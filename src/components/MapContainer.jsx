import React from 'react';

const { serviceArea, specialAreas } = require('./../data').default;

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
import SpecialBikeMarker from './SpecialBikeMarker';
import ServiceArea from './ServiceArea';
import UserPositionMarker from './UserPositionMarker';
import StationMarker from './StationMarker';
import SpecialArea from './SpecialArea';

// api calls
const {
  fetchBikeStatus,
  fetchStationInformation,
  fetchStationStatus
} = require('./../util');

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
      specialAreas,
      windowSize: { height: 600, width: 1200 },
      zoomLevel: 13
    };
  }

  updateStateFromApi = () => {
    console.log('updating state from API');
    // get current location if possible
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });

    Promise.all([fetchBikeStatus, fetchStationInformation, fetchStationStatus])
      .then(responses => {
        const freeBikeStatus = responses[0].data;
        const stationInformation = responses[1].data;
        const stationStatus = responses[2].data;
        this.setState({
          loading: false,
          freeBikeStatus,
          stationInformation,
          stationStatus
        });
        console.log(this.state);
      })
      .catch(err => this.setState({ loading: false, error: true }));
  };

  componentDidMount = () => {
    /* 
        find out what height / width to set the map to
        this is because the canvas element needs a defined height / width
        before the library runs 
    */
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

    // update state on initial load
    this.updateStateFromApi();
    // update the UI once every minute
    this.apiTimer = setInterval(() => {
      this.updateStateFromApi();
    }, 60000);
  };

  componentWillUnmount = () => {
    clearInterval(this.apiTimer);
  };

  render() {
    // default map position
    const position = [45.53, -122.66];

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
    let stationMarkers;
    if (this.state.loading === false && this.state.error === false) {
      const bikeData = this.state.freeBikeStatus.data.bikes;
      const stationData = this.state.stationInformation.data.stations;
      freeBikeMarkers = bikeData.map(bike => {
        // find bikes with unique names
        if (bike.name.toUpperCase().replace('BIKETOWN', '').length > 7) {
          return <SpecialBikeMarker bike={bike} key={bike.id} />;
        } else {
          return <BikeMarker bike={bike} key={bike.id} />;
        }
      });
      stationMarkers = stationData.map(station => {
        return <StationMarker station={station} />;
      });
    }

    const specialAreas = this.state.specialAreas.map(area => {
      return <SpecialArea area={area} />;
    });

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
        ref={ref => (this.map = ref)}
      >
        <TileLayer
          url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        />
        <ServiceArea
          coordinates={this.state.serviceArea.polygon.coordinates[0]}
        />
        {specialAreas}
        {stationMarkers}
        <MarkerClusterGroup
          spiderLegPolylineOptions={{
            weight: 0,
            color: '#222',
            opacity: 0
          }}
          pane={'markerPane'}
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
