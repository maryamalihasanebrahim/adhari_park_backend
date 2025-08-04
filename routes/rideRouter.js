const router = require('express').Router()
const controller = require('../controllers/rideController')

router.post('/new', controller.CreateRide)
router.get('/', controller.GetRides)


module.exports = router