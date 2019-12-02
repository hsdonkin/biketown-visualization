import React from 'react';
import L from 'leaflet';
import provider from 'leaflet-providers';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const mymap = L.map('mapid').setView([45.537, -122.687], 12);
    L.tileLayer.provider('Stamen.Toner').addTo(mymap);
  };

  render() {
    return (
      <div>
        <h2>Map</h2>
        <div id="mapid" style={{ height: 600, width: 800 }}></div>
      </div>
    );
  }
}

export default Map;
