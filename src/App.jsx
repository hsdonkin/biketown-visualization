import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

// components
import { Map, Marker, Popup, PolyLine, TileLayer } from 'react-leaflet';

import log from './logs/0995BETRUE2018TRAINER.json';
let allRoutes = [];
log.items.forEach(item =>
  item.route.path.coordinates.forEach(coordinate => allRoutes.push(coordinate))
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRoutes: allRoutes,
      currentCoordinates: []
    };
  }

  updateCoordinates = () => {
    let allRoutesCopy = JSON.parse(JSON.stringify(this.state.allRoutes));
    let currentCopy = JSON.parse(JSON.stringify(this.state.currentCoordinates));
    currentCopy.push(allRoutesCopy.shift());
    this.setState({
      allRoutes: allRoutesCopy,
      currentCoordinates: currentCopy
    });
    console.log(this.state);
  };

  componentDidMount = () => {
    // this.timer = setInterval(() => this.updateCoordinates(), 1000);
  };

  componentWillUnmount = () => {
    console.log('component unmounting');
    clearInterval(this.timer);
  };

  render() {
    const position = [45.51, -122.66];
    return (
      <Map center={position} zoom={13} style={{ height: 700, width: 1200 }}>
        <TileLayer
          url="http://tile.stamen.com/toner/{z}/{x}/{y}.png"
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
