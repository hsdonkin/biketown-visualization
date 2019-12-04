import React from 'react';
import { Marker } from 'react-leaflet';
const triangleIcon = require('./../assets/triangle.svg');

class StationMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomLevel: 13
    };
  }

  render() {
    const { station } = this.props;
    return (
      <Marker
        key={station.id}
        position={[station.lat, station.lon]}
        icon={L.icon({
          iconUrl: triangleIcon,
          iconSize: [20, 20]
        })}
      />
    );
  }
}

export default StationMarker;
