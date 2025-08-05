const Ride = require('../models/Ride')

const GetRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.send(rides)
  } catch (error) {
    console.log(error)
  }
}

const CreateRide = async (req, res) => {
  try {
    const ride = await Ride.create({ ...req.body })
    res.send(ride)
  } catch (error) {}
}

const GetRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id)
    res.send(ride)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetRides,
  CreateRide,
  GetRide
}
