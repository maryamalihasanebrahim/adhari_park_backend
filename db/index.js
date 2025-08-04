const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('successfully connected to mongoDB . . .')
  })
  .catch((e) => {
    console.error('connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
