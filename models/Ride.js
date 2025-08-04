const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String },
    thrill_level: { type: String, enum: ['low', 'normal', 'high'] },
    min_height: { type: Number },
    location: { type: String, enum: ['indoor', 'outdoor'] },
    max_persons: { type: Number },
    price: { type: Number },
    description: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Ride', rideSchema)
