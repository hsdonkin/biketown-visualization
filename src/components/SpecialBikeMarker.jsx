import React from 'react';
import L from 'leaflet';

import { Marker, Tooltip, Popup } from 'react-leaflet';

const specialBikeIcon = require('./../assets/special-bike.svg');
import bikeDesignImg from './../assets/biketown-design.jpg';
import bikeDesignHandlebarsImg from './../assets/biketown-design-handlebars.jpg';
import bikeDesignFendersImg from './../assets/biketown-design-fenders.jpg';

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
      <Tooltip
        className={'marker-tooltip'}
        offset={L.point({
          x: 0,
          y: -10
        })}
      >
        <span>{bike.name}</span>
      </Tooltip>
      <Popup className="bike-popup design-bike-popup">
        <h3>{bike.name}</h3>
        <hr />
        <div className="popup-img-wrapper">
          <img src={bikeDesignImg} className="popup-hero" />
          <img src={bikeDesignHandlebarsImg} className="popup-secondary" />
          <img src={bikeDesignFendersImg} className="popup-secondary" />
        </div>
        <div className="popup-text">
          <p>
            As a longtime partner with the City of Portland, BIKETOWN highlights
            Nike’s commitment to make Portland an even more active, vibrant and
            innovative city. Nike oversees the design and branding of the
            system’s logo, stations and physical presence, plus limited-edition
            bike wraps.
          </p>
        </div>
        <div className="popup-button-wrapper">
          <a
            className="popup-button"
            href="https://www.biketownpdx.com/how-it-works"
          >
            RENT
          </a>
          <a
            className="popup-button"
            href="https://www.biketownpdx.com/how-it-works/sneaker-bikes"
          >
            MORE INFO
          </a>
        </div>
      </Popup>
    </Marker>
  );
};

export default SpecialBikeMarker;
