const ParkingSession = require('../models/parkingsession');

async function getParkingSessions(req, res) {
  try {
    const parkingSessions = await ParkingSession.find().populate('vehicle').populate('parkingSpot');
    res.status(200).send(parkingSessions);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function getParkingSession(req, res) {
  const { id } = req.params;

  try {
    const parkingSession = await ParkingSession.findById(id).populate('vehicle').populate('parkingSpot');
    if (!parkingSession) {
      return res.status(404).send({ msg: 'Sesión de estacionamiento no encontrada' });
    }
    res.status(200).send(parkingSession);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function createParkingSession(req, res) {
  const parkingSession = new ParkingSession(req.body);

  try {
    const parkingSessionStored = await parkingSession.save();
    res.status(201).send(parkingSessionStored);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function updateParkingSession(req, res) {
  const { id } = req.params;
  const parkingSessionData = req.body;

  try {
    const updatedParkingSession = await ParkingSession.findByIdAndUpdate(id, parkingSessionData, { new: true });
    if (!updatedParkingSession) {
      return res.status(404).send({ msg: 'Sesión de estacionamiento no encontrada' });
    }
    res.status(200).send(updatedParkingSession);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function deleteParkingSession(req, res) {
  const { id } = req.params;

  try {
    const deletedParkingSession = await ParkingSession.findByIdAndDelete(id);
    if (!deletedParkingSession) {
      return res.status(404).send({ msg: 'Sesión de estacionamiento no encontrada' });
    }
    res.status(200).send({ msg: 'Sesión de estacionamiento eliminada correctamente' });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

module.exports = { getParkingSessions, getParkingSession, createParkingSession, updateParkingSession, deleteParkingSession };
