import React from 'react';
import { Polygon } from 'react-leaflet';

const ServiceArea = props => {
  let coordinates = props.coordinates;
  coordinates = coordinates.forEach(
    coordinate => (coordinate = coordinate.reverse())
  );
  return (
    <Polygon
      positions={props.coordinates}
      stroke={true}
      color={'#FC4C02'}
      fill={false}
      opacity={0.8}
    />
  );
};

export default ServiceArea;
