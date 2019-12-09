import React from 'react';
import bicycleIcon from './../assets/bicycle.svg';
import stationIcon from './../assets/station-icon.svg';
import serviceAreaIcon from './../assets/service-area-path.svg';
import specialAreaIcon from './../assets/special-area-icon.svg';

class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLegend: false
    };
  }
  render() {
    if (this.state.showLegend === true) {
      return (
        <div className={'legend'}>
          <h3>Legend</h3>
          <span
            className="legend-collapsed-icon"
            onClick={() => this.setState({ showLegend: false })}
          ></span>
          <span className="legend-item">
            <span className="img-holder">
              <img src={bicycleIcon} alt="Bikes" />
            </span>

            <input
              onClick={() => {
                this.props.handleToggle('showBikes');
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
                this.props.handleToggle('showStations');
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
                this.props.handleToggle('showServiceArea');
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
                this.props.handleToggle('showSpecialAreas');
              }}
              type="checkbox"
            />
            <p>Special Areas</p>
          </span>
        </div>
      );
    } else {
      return (
        <div
          className="legend-collapsed"
          onClick={() => this.setState({ showLegend: true })}
        >
          <span className="legend-collapsed-icon"></span>
        </div>
      );
    }
  }
}

export default Legend;
