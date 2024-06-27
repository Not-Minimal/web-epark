const Payment = require('../models/payment');

async function getPayments(req, res) {
  try {
    const payments = await Payment.find().populate('parkingSession');
    res.status(200).send(payments);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function getPayment(req, res) {
  const { id } = req.params;

  try {
    const payment = await Payment.findById(id).populate('parkingSession');
    if (!payment) {
      return res.status(404).send({ msg: 'Pago no encontrado' });
    }
    res.status(200).send(payment);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function createPayment(req, res) {
  const payment = new Payment(req.body);

  try {
    const paymentStored = await payment.save();
    res.status(201).send(paymentStored);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function updatePayment(req, res) {
  const { id } = req.params;
  const paymentData = req.body;

  try {
    const updatedPayment = await Payment.findByIdAndUpdate(id, paymentData, { new: true });
    if (!updatedPayment) {
      return res.status(404).send({ msg: 'Pago no encontrado' });
    }
    res.status(200).send(updatedPayment);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function deletePayment(req, res) {
  const { id } = req.params;

  try {
    const deletedPayment = await Payment.findByIdAndDelete(id);
    if (!deletedPayment) {
      return res.status(404).send({ msg: 'Pago no encontrado' });
    }
    res.status(200).send({ msg: 'Pago eliminado correctamente' });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

module.exports = { getPayments, getPayment, createPayment, updatePayment, deletePayment };
