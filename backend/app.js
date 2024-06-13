//Importar Express
const express = require('express');
const cors = require('cors');
const { API_VERSION } = require('./constants');


// Inicializar Express
const app = express();

// import routings
// Ruta de autorizacion
const authRoutes = require('./router/auth');
// Ruta de usuarios
const userRoutes = require('./router/user');
// Ruta de menus
const menuRoutes = require('./router/menu');
// Ruta de cursos
const courseRoutes = require('./router/course');
// Ruta de posts
const postRoutes = require('./router/post');
// Ruta de Newsletter
const nesletterRoutes = require('./router/newsletter');
// Importar el router de vehículos
const vehicleRoutes = require('./router/vehicle');
// Importar el router de parkingSession
const parkingSessionRoutes = require('./router/parkingsession')
// Importar el router de parkingSpot
const parkingSpotRoutes = require('./router/parkingspot')
// Agregar el router de los Payments o pagos
const paymentRoutes = require('./router/payment')

// Configurar Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurar archivos estáticos
app.use(express.static('uploads'));

// Configurar CORS
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173', 'http://localhost:3977/api/v1'],
}));

// Configure routings
// Agregar ruta de autorizacion a la configuración de Express
app.use(`/api/${API_VERSION}`, authRoutes);
// Agregar ruta de usuarios a la configuración de Express
app.use(`/api/${API_VERSION}`, userRoutes);
// Agregar ruta de menus a la configuración de Express
app.use(`/api/${API_VERSION}`, menuRoutes);
// Agregar ruta de cursos (Se quitara)
app.use(`/api/${API_VERSION}`, courseRoutes);
// Agregar ruta de post (Se quitara)
app.use(`/api/${API_VERSION}`, postRoutes);
// Agregar ruta de posts (Se quitara)
app.use(`/api/${API_VERSION}`, nesletterRoutes);
// Agregar el router de vehículos a la configuración de Express
app.use(`/api/${API_VERSION}`, vehicleRoutes);
// Agregar el router de las sesiones de estacionamiento a la configuración de Express
app.use(`/api/${API_VERSION}`, parkingSessionRoutes);
// Agregar el router de los espacios de estacionamientos a la configuración de Express
app.use(`/api/${API_VERSION}`, parkingSpotRoutes);
// Agregar el router de los pagos recibidos a la configuración de Express
app.use(`/api/${API_VERSION}`, paymentRoutes);

// En app.js, después de configurar las rutas
app.get('/test', (req, res) => {
  res.json('Test ok');
});



// Exportar Express
module.exports = app;