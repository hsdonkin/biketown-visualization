import React from 'react';
import bicycleIcon from './../assets/bicycle.svg';
import stationIcon from './../assets/station-icon.svg';
import serviceAreaIcon from './../assets/service-area-path.svg';
import specialAreaIcon from './../assets/special-area-icon.svg';

const Legend = props => {
  return (
    <div className={'legend'}>
      <h3>Legend</h3>
      <span className="legend-item">
        <span className="img-holder">
          <img src={bicycleIcon} alt="Bikes" />
        </span>

        <input
          onClick={() => {
            props.handleToggle('showBikes');
          }}
          type="checkbox"
          defaultChecked
        />

        <p>Bikes</p>
      </span>
      <span className="legend-item">
        <span className="img-holder">
          <img src={stationIcon} alt="Stations" />
        </span>

        <input
          onClick={() => {
            props.handleToggle('showStations');
          }}
          type="checkbox"
          defaultChecked
        />

        <p>Stations</p>
      </span>
      <span className="legend-item">
        <span className="img-holder">
          <img src={serviceAreaIcon} alt="Service Areas" />
        </span>

        <input
          onClick={() => {
            props.handleToggle('showServiceArea');
          }}
          type="checkbox"
          defaultChecked
        />

        <p>Service Area</p>
      </span>
      <span className="legend-item">
        <span className="img-holder">
          <img src={specialAreaIcon} alt="Special Areas" />
        </span>
        <input
          onClick={() => {
            props.handleToggle('showSpecialAreas');
          }}
          type="checkbox"
        />
        <p>Special Areas</p>
      </span>
    </div>
  );
};

export default Legend;
