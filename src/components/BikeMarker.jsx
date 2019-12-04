import React from 'react';
const bikeIcon = require('./../assets/bicycle.svg');
import {
  Map,
  Marker,
  Popup,
  Polyline,
  TileLayer,
  Tooltip
} from 'react-leaflet';

const BikeMarker = props => {
  const { bike } = props;

  return (
    <Marker
      key={bike.id}
      position={[bike.lat, bike.lon]}
      icon={L.icon({
        iconUrl: bikeIcon,
        iconSize: [30, 30]
      })}
    >
      <Tooltip className={'bike-marker-tooltip'}>
        <span>{bike.name}</span>
      </Tooltip>
    </Marker>
  );
};

export default BikeMarker;
