const mongoose = require("mongoose");

const ParkingSpotSchema = mongoose.Schema({
  spotNumber: {
    type: String,
    unique: true,
    required: true
  },
  location: String,
  occupied: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("ParkingSpot", ParkingSpotSchema);

