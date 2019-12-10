import React from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
const stationIcon = require('./../assets/station-icon.svg');

class StationMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomLevel: 13
    };
  }

  render() {
    const { station } = this.props;
    const { status } = this.props;
    return (
      <Marker
        key={station.id}
        position={[station.lat, station.lon]}
        icon={L.icon({
          iconUrl: stationIcon,
          iconSize: [20, 20]
        })}
        pane={'shadowPane'}
      >
        <Tooltip className={'marker-tooltip'}>
          <span>{station.name}</span>
        </Tooltip>
        <Popup>
          <h3>{station.name}</h3>
          <hr />
          <p>Bikes Available: {status.num_bikes_available}</p>
          <p>Racks Available: {status.num_docks_available}</p>
        </Popup>
      </Marker>
    );
  }
}

export default StationMarker;
