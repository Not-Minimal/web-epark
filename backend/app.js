//Importar Express
const express = require('express');
const bodyParser = require('body-parser');
const { API_VERSION } = require('./constants');

// Inicializar Express
const app = express();

// import routings
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Static Files
app.use(express.static('uploads'));

// Configure HTTP headers - CORS

// Configure routings
// ...

// exportar Express
module.exports = app;