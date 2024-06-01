const Vehicle = require('../models/vehicle');

async function getVehicles(req, res) {
  try {
    const vehicles = await Vehicle.find().populate('user');
    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

// async function getVehicle(req, res) {
//   const { path } = req.params;

//   try {
//     const vehicleStored = await Vehicle.findOne({ path });
//     if (!vehicleStored) {
//       return res.status(404).send({ msg: 'Vehículo no encontrado' });
//     }
//     res.status(200).send({ vehicle: vehicleStored });
//   } catch (error) {
//     res.status(500).send({ msg: 'Error del servidor' });
//   }
// }

async function getVehicle(req, res) {
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findById(id).populate('user');
    if (!vehicle) {
      return res.status(404).send({ msg: 'Vehículo no encontrado' });
    }
    res.status(200).send(vehicle);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function createVehicle(req, res) {
  const vehicle = new Vehicle(req.body);

  try {
    const vehicleStored = await vehicle.save();
    res.status(201).send(vehicleStored);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function updateVehicle(req, res) {
  const { id } = req.params;
  const vehicleData = req.body;

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, vehicleData, { new: true });
    if (!updatedVehicle) {
      return res.status(404).send({ msg: 'Vehículo no encontrado' });
    }
    res.status(200).send(updatedVehicle);
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function deleteVehicle(req, res) {
  const { id } = req.params;

  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);
    if (!deletedVehicle) {
      return res.status(404).send({ msg: 'Vehículo no encontrado' });
    }
    res.status(200).send({ msg: 'Vehículo eliminado correctamente' });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

module.exports = { getVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle };
