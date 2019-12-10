import React from 'react';
const bikeIcon = require('./../assets/bicycle.svg');
import bikeOrangeImg from './../assets/biketown-orange.jpeg';
import bikeOrangeHandlebarsImg from './../assets/biketown-orange-handlebars.png';
import bikeOrangeFendersImg from './../assets/biketown-orange-fenders.png';

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
        iconSize: [50, 50]
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
      <Popup>
        <h3>{bike.name}</h3>
        <hr />
        <div className="popup-img-wrapper">
          <img src={bikeOrangeImg} className="popup-hero" />
          <img src={bikeOrangeHandlebarsImg} className="popup-secondary" />
          <img src={bikeOrangeFendersImg} className="popup-secondary" />
        </div>
        <div className="popup-text">
          <p>
            BIKETOWN uses Social Bicycles (SoBi), which were designed for easy
            riding in an urban environment. They're modeled after the
            step-through Dutch frame with features that are comfortable for a
            wide range of riders.
          </p>
        </div>
        <div className="popup-button-wrapper">
          <a
            className="popup-button"
            href="https://www.biketownpdx.com/how-it-works/meet-the-bike"
          >
            RENT
          </a>
          <a
            className="popup-button"
            href="https://www.biketownpdx.com/how-it-works/meet-the-bike"
          >
            MORE INFO
          </a>
        </div>
      </Popup>
    </Marker>
  );
};

export default BikeMarker;
