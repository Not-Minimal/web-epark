const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST } = require('./constants');

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=web-epark`
)
  .then(() => {
    console.log("La conexion con la base de datos ha sido exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
  });
