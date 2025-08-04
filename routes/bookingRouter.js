const router = require('express').Router()
const controller = require('../controllers/bookingController')

router.post('/new', controller.CreateBooking)
router.get('/', controller.GetBookings)
router.get('/:id', controller.GetBooking)
module.exports = router
