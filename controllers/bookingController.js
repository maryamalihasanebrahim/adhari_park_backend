const Booking = require('../models/Booking')

const GetBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
    res.send(bookings)
  } catch (error) {
    console.log(error)
  }
}

const CreateBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body })
    res.send(booking)
  } catch (error) {
    console.log(error)
  }
}

const GetBooking = async(req, res)=> {
  try {
    const booking = await Booking.findById(req.params.id)
    res.send(booking)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  CreateBooking,
  GetBookings, 
  GetBooking
}
