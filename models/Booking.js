const { Schema } = require('mongoose')
const mongoose = require('mongoose')


const bookingSchema = new Schema(
  {
    date: { type: Date, required: true },
    time: {
      type: String,
      required: true
    },
    persons: { type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride' }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Booking', bookingSchema)

