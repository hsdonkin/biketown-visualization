const axios = require('axios');

const fetchBikeStatus = axios({
  url: `https://biketownpdx.socialbicycles.com/opendata/free_bike_status.json`
});

const fetchStationStatus = axios({
  url: 'https://biketownpdx.socialbicycles.com/opendata/station_status.json'
});

const fetchStationInformation = axios({
  url:
    'https://biketownpdx.socialbicycles.com/opendata/station_information.json'
});

// const fetchServiceArea = axios({
//   url: 'https://app.socialbicycles.com/api/networks/92/areas.json',
//   auth: {
//     username: process.env['SOBI_USERNAME'],
//     password: process.env['SOBI_PASSWORD']
//   }
// });

module.exports = {
  fetchBikeStatus,
  fetchStationStatus,
  fetchStationInformation
};
