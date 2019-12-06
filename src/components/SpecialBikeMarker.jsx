import React from 'react';
import L from 'leaflet';

import { Marker, Tooltip } from 'react-leaflet';
const specialBikeIcon = require('./../assets/special-bike.svg');

const SpecialBikeMarker = props => {
  const { bike } = props;
  return (
    <Marker
      key={bike.id}
      icon={L.icon({
        iconUrl: specialBikeIcon,
        iconSize: [50, 50]
      })}
      position={[bike.lat, bike.lon]}
    >
      <Tooltip className={'marker-tooltip'}>
        <span>{bike.name}</span>
      </Tooltip>
    </Marker>
  );
};

export default SpecialBikeMarker;
