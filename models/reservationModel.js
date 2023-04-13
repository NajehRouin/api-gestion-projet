const mongoose=require('mongoose')

const ReservationSchema=new mongoose.Schema({
        chef:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
        projet:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projets",
        },
        materiel:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "materiels",
        },
        description:{
            type:String
        },
        date_reservation:{
            type:String
        }
})

module.exports=mongoose.model('reservation',ReservationSchema)