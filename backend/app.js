//Importar Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_VERSION } = require('./constants');


// Inicializar Express
const app = express();

// import routings
const authRoutes = require('./router/auth');
const userRoutes = require('./router/user');
const menuRoutes = require('./router/menu');
const courseRoutes = require('./router/course');
const postRoutes = require('./router/post');
const nesletterRoutes = require('./router/newsletter');
// Importar el router de vehículos
const vehicleRoutes = require('./router/vehicle');

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Static Files
app.use(express.static('uploads'));

// Configure HTTP headers - CORS
app.use(cors());

// Configure routings
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, courseRoutes);
app.use(`/api/${API_VERSION}`, postRoutes);
app.use(`/api/${API_VERSION}`, nesletterRoutes);
// Agregar el router de vehículos a la configuración de Express
app.use(`/api/${API_VERSION}`, vehicleRoutes);

// exportar Express
module.exports = app;