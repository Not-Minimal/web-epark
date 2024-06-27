const express = require('express');
const PaymentController = require('../controllers/payment');
const md_auth = require('../middlewares/authenticated');

const api = express.Router();

api.get("/payments", [md_auth.asureAuth], PaymentController.getPayments);
api.get("/payment/:id", [md_auth.asureAuth], PaymentController.getPayment);
api.post("/payment", [md_auth.asureAuth], PaymentController.createPayment);
api.patch("/payment/:id", [md_auth.asureAuth], PaymentController.updatePayment);
api.delete("/payment/:id", [md_auth.asureAuth], PaymentController.deletePayment);

module.exports = api;
