import React from 'react';
import bicycle from './../assets/bicycle.svg';
import stationIcon from './../assets/station-icon.svg';
import serviceAreaIcon from './../assets/service-area-icon.svg';
import specialAreaIcon from './../assets/special-area-icon.svg';

const ToggleBox = props => {
  return (
    <div className={'toggle-box'}>
      <input
        onClick={() => {
          props.handleToggle('showBikes');
        }}
        type="checkbox"
        defaultChecked
      />
      Bikes
      <input
        onClick={() => {
          props.handleToggle('showStations');
        }}
        type="checkbox"
        defaultChecked
      />
      Stations
      <input
        onClick={() => {
          props.handleToggle('showServiceArea');
        }}
        type="checkbox"
        defaultChecked
      />
      Service Area
      <input
        onClick={() => {
          props.handleToggle('showSpecialAreas');
        }}
        type="checkbox"
        defaultChecked
      />
      Special Areas
    </div>
  );
};

export default ToggleBox;
