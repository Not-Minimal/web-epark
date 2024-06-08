const mongoose = require("mongoose");
const app = require('./app');
const { DB_USER, DB_PASSWORD, DB_HOST, IP_SERVER, API_VERSION } = require('./constants');

const PORT = process.env.POST || 3977;

const cors = require('cors');

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3977/api/v1/post',
}));

app.get('/test', (req, res) => {
  res.json('Test ok');
});

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=web-epark`
)
  .then(() => {
    app.listen(PORT, () => { // Corrected 'port' to 'PORT'
      console.log("#############################################");
      console.log("##### API RESTful#########");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
  });
