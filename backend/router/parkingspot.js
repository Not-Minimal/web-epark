const express = require('express');
const ParkingSpotController = require('../controllers/parkingSpot');
const md_auth = require('../middlewares/authenticated');

const api = express.Router();

api.get("/parking-spots", [md_auth.asureAuth], ParkingSpotController.getParkingSpots);
api.get("/parking-spot/:id", [md_auth.asureAuth], ParkingSpotController.getParkingSpot);
api.post("/parking-spot", [md_auth.asureAuth], ParkingSpotController.createParkingSpot);
api.patch("/parking-spot/:id", [md_auth.asureAuth], ParkingSpotController.updateParkingSpot);
api.delete("/parking-spot/:id", [md_auth.asureAuth], ParkingSpotController.deleteParkingSpot);

module.exports = api;
