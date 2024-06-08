const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); // Crea una instancia de la aplicación Express

// Importa las configuraciones y rutas necesarias
const { DB_USER, DB_PASSWORD, DB_HOST, IP_SERVER, API_VERSION } = require('./constants');
const userRouter = require('./router/user');

const PORT = process.env.PORT || 3977;

// Configura middleware
app.use(express.json());
app.use(cors());

// Configura las rutas
app.use('/api', userRouter);

// Conexión a la base de datos MongoDB
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=web-epark`
)
  .then(() => {
    // Inicia el servidor
    app.listen(PORT, () => {
      console.log("#############################################");
      console.log("##### API RESTful#########");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
  });
