const express = require('express');
const VehicleController = require('../controllers/vehicle');
const md_auth = require('../middlewares/authenticated');

const api = express.Router();

api.get("/vehicles", [md_auth.asureAuth], VehicleController.getVehicles);
api.get("/vehicle/:id", [md_auth.asureAuth], VehicleController.getVehicle);
api.post("/vehicle", [md_auth.asureAuth], VehicleController.createVehicle);
api.patch("/vehicle/:id", [md_auth.asureAuth], VehicleController.updateVehicle);
api.delete("/vehicle/:id", [md_auth.asureAuth], VehicleController.deleteVehicle);

module.exports = api;


// TODO