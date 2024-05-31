const express = require('express');
const ParkingSessionController = require('../controllers/parkingSession');
const md_auth = require('../middlewares/authenticated');

const api = express.Router();

api.get("/parking-sessions", [md_auth.asureAuth], ParkingSessionController.getParkingSessions);
api.get("/parking-session/:id", [md_auth.asureAuth], ParkingSessionController.getParkingSession);
api.post("/parking-session", [md_auth.asureAuth], ParkingSessionController.createParkingSession);
api.patch("/parking-session/:id", [md_auth.asureAuth], ParkingSessionController.updateParkingSession);
api.delete("/parking-session/:id", [md_auth.asureAuth], ParkingSessionController.deleteParkingSession);

module.exports = api;
