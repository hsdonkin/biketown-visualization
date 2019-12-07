import React from 'react';

import { Polygon, Tooltip } from 'react-leaflet';

const SpecialArea = props => {
  let { area } = props;
  // freaking sobi returns the coordinates backwards
  area.polygon.coordinates[0].forEach(
    coordinate => (coordinate = coordinate.reverse())
  );

  console.log(area.polygon);

  return (
    <Polygon
      positions={area.polygon.coordinates}
      stroke={true}
      color={'#FC4C02'}
      fill={false}
      opacity={0.8}
    >
      <Tooltip>
        <span>{area.name}</span>
      </Tooltip>
    </Polygon>
  );
};

export default SpecialArea;
