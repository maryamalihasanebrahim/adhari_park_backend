const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    passwordDigest: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
