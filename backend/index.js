const mongoose = require("mongoose");
const app = require('./app');
const { DB_USER, DB_PASSWORD, DB_HOST, IP_SERVER, API_VERSION } = require('./constants');

const PORT = process.env.POST || 3977;

// Conectar a la base de datos MongoDB
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=web-epark`
)
  .then(() => {
    // Iniciar el servidor una vez que la conexión a la base de datos sea exitosa
    app.listen(PORT, () => {
      console.log("#############################################");
      console.log("##### API RESTful #########");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
  });
