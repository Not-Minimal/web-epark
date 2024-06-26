const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const ParkingSessionSchema = mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true
  },
  parkingSpot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingSpot",
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: Date,
  paid: {
    type: Boolean,
    default: false
  }
});

ParkingSessionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("ParkingSession", ParkingSessionSchema);
