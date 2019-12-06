import React from 'react';
import { CircleMarker } from 'react-leaflet';

class UserPositionMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerSize: 4
    };
  }

  componentDidMount = () => {
    this.circleTimer = setInterval(() => {
      if (this.state.markerSize > 6) {
        this.setState({ markerSize: 4 });
      } else {
        this.setState({ markerSize: (this.state.markerSize += 1) });
      }
    }, 200);
  };

  render() {
    let { currentPosition } = this.props;
    return (
      <CircleMarker
        center={[currentPosition.lat, currentPosition.lng]}
        radius={4}
        weight={this.state.markerSize}
        color={'#FC4C02'}
        opacity={0.5}
        fillColor={'#FC4C02'}
        fillOpacity={1}
        pane={'markerPane'}
      />
    );
  }
}

export default UserPositionMarker;
