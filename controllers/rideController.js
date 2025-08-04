const Ride = require('../models/Ride')

const GetRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.send(rides)
  } catch (error) {
    console.log(error)
  }
}

const CreateRide = async(req, res)=> {
  try {
    const ride = await Ride.create({... req.body})
    res.send(ride)
  } catch (error) {
    
  }
}

module.exports = {
  GetRides, 
  CreateRide, 
  }