const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const PaymentSchema = mongoose.Schema({
  parkingSession: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingSession",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentMethod: String,
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

PaymentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Payment", PaymentSchema);
