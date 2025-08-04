const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/authRouter')
const bookingRouter = require('./routes/bookingRouter')
const rideRouter = require('./routes/rideRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', authRouter)
app.use('/bookings', bookingRouter)
app.use('/rides', rideRouter)

app.use('/', (req, res) => {
  res.send(`connected!`)
})

app.listen(PORT, () => {
  console.log(`running express server on port ${PORT} . . .`)
})
