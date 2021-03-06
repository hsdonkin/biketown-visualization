/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  eventhough those 2 dependencies are only used in development
  eslint has no way to tell that and outputs an error
*/

// global.newrelic = require('newrelic'); // Expose the agent in the global scope
// require('./bundle.js'); // Load the output of the webpack build
// const webpackDevServer = require('webpack-dev-server');
// newrelic.instrumentLoadedModule(
//   'webpack-dev-server', // the module's name, as a string
//   webpackDevServer // the module instance
// );

// react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// hot reload for development
import { AppContainer } from 'react-hot-loader';

require('react-leaflet-markercluster/dist/styles.min.css');
import './style.scss';
// import 'leaflet/dist/leaflet.css';

import App from './App';

const root = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
