//Importar Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_VERSION } = require('./constants');

// Inicializar Express
const app = express();

// import routings
const authRoutes = require('./router/auth');

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Static Files
app.use(express.static('uploads'));

// Configure HTTP headers - CORS
app.use(cors());
// Configure routings
app.use(`/api/${API_VERSION}`, authRoutes);

// exportar Express
module.exports = app;