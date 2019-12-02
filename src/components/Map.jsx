import React from 'react';
import L from 'leaflet';
import provider from 'leaflet-providers';

import log from './../logs/0995BETRUE2018TRAINER.json';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const mymap = L.map('mapid').setView([45.537, -122.687], 12);
    L.tileLayer.provider('Stamen.Toner').addTo(mymap);
    log.items.forEach(item => {
      const coordinates = item.route.path.coordinates;
      const polyline = L.polyline(coordinates, { color: '#FC4C02' }).addTo(
        mymap
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Map</h2>
        <div id="mapid" style={{ height: 700, width: 1200 }}></div>
      </div>
    );
  }
}

export default Map;
