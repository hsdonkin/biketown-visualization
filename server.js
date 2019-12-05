const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// new relic webpack solution
const newrelic = require('newrelic');
newrelic.instrumentLoadedModule(
  'express', // the module's name, as a string
  express // the module instance
);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log(`Our app is running on port ${PORT}`);
});
