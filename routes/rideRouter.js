const router = require('express').Router()
const controller = require('../controllers/rideController')

router.post('/new', controller.CreateRide)
router.get('/', controller.GetRides)
router.get('/:id', controller.GetRide)


module.exports = router
