import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';

//api calls
const axios = require('axios');

// components
import MapContainer from './components/MapContainer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MapContainer />
    </React.Fragment>
  );
};

export default App;
