const router= require('express').Router()
const ReservationCtrl=require('../controlles/reservationCtrl')

router.get('/reservation',ReservationCtrl.getAllRservation)
router.post('/reservation',ReservationCtrl.reserve)

module.exports=router