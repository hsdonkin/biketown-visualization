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
        iconSize: [39, 39]
      })}
    >
      <Tooltip
        className={'marker-tooltip'}
        offset={L.point({
          x: 0,
          y: -10
        })}
      >
        <span>{bike.name}</span>
      </Tooltip>
    </Marker>
  );
};

export default BikeMarker;
