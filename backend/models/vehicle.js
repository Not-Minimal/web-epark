const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  licensePlate: {
    type: String,
    unique: true,
    required: true
  },
  make: String,
  model: String,
  color: String,
  year: Number
});

module.exports = mongoose.model("vehicle", VehicleSchema);


