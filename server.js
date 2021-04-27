const express = require('express');
const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
const configureRoutes = require('./routes');

configureRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});
