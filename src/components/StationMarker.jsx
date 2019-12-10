import React from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
const stationIcon = require('./../assets/station-icon.svg');
const swoosh = require('./../assets/swoosh.svg');
console.log(swoosh);

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
    // community corral name styling for popup
    let nameHeading;
    if (station.name.includes('Community Corral')) {
      nameHeading = (
        <React.Fragment>
          <h3>{station.name.replace('- Community Corral', '')}</h3>
          <h4>Community Corral</h4>
        </React.Fragment>
      );
    } else {
      nameHeading = (
        <React.Fragment>
          <h3>{station.name}</h3>
          <h4>
            BIKETOWN &nbsp;
            <img
              src={swoosh}
              style={{ height: '0.4rem', filter: 'invert(100%)' }}
            />
            &nbsp; Station
          </h4>
        </React.Fragment>
      );
    }

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
        <Popup className="station-popup">
          {nameHeading}
          <hr />
          <p>Bikes Available: {status.num_bikes_available}</p>
          <p>Racks Available: {status.num_docks_available}</p>
        </Popup>
      </Marker>
    );
  }
}

export default StationMarker;
