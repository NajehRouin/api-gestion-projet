const Reservations=require('../models/reservationModel')


const ReservationCtrl={
        reserve:async(req,res)=>{
            try {
                const {chef,projet,materiel,description,date_reservation}=req.body
                const newReservation=new Reservations({chef,projet,materiel,description,date_reservation})
                await newReservation.save()
                res.json({result:newReservation})
            } catch (error) {
                return res.status(500).json({msg:error.message})   
            }
        },
    getAllRservation:async(req,res)=>{
        try {
            const reservations= await Reservations.find().populate('chef','nom').populate('projet','titre_projet').populate('materiel').exec()
            res.json({result:reservations})
        } catch (error) {
            return res.status(500).json({msg:error.message})   
        }
    }
    
}

module.exports=ReservationCtrl