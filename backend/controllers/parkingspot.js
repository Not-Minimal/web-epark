const ParkingSpot = require('../models/parkingspot');

async function getParkingSpots(req, res) {
  try {
    const parkingSpots = await ParkingSpot.find();
    res.status(200).send(parkingSpots);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function getParkingSpot(req, res) {
  const { id } = req.params;

  try {
    const parkingSpot = await ParkingSpot.findById(id);
    if (!parkingSpot) {
      return res.status(404).send({ msg: 'Espacio de estacionamiento no encontrado' });
    }
    res.status(200).send(parkingSpot);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function createParkingSpot(req, res) {
  const parkingSpot = new ParkingSpot(req.body);

  try {
    const parkingSpotStored = await parkingSpot.save();
    res.status(201).send(parkingSpotStored);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function updateParkingSpot(req, res) {
  const { id } = req.params;
  const parkingSpotData = req.body;

  try {
    const updatedParkingSpot = await ParkingSpot.findByIdAndUpdate(id, parkingSpotData, { new: true });
    if (!updatedParkingSpot) {
      return res.status(404).send({ msg: 'Espacio de estacionamiento no encontrado' });
    }
    res.status(200).send(updatedParkingSpot);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function deleteParkingSpot(req, res) {
  const { id } = req.params;

  try {
    const deletedParkingSpot = await ParkingSpot.findByIdAndDelete(id);
    if (!deletedParkingSpot) {
      return res.status(404).send({ msg: 'Espacio de estacionamiento no encontrado' });
    }
    res.status(200).send({ msg: 'Espacio de estacionamiento eliminado correctamente' });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

module.exports = { getParkingSpots, getParkingSpot, createParkingSpot, updateParkingSpot, deleteParkingSpot };
