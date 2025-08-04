const router = require('express').Router()
const controller = require('../controllers/bookingController')

router.post('/new', controller.CreateBooking)
router.get('/', controller.GetBookings)

module.exports = router
