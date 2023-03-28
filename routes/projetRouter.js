const router=require('express').Router()
const projetCtrl=require('../controlles/projetCtrl')

router.get('/projet',projetCtrl.getProjets)
router.get('/projet/:id',projetCtrl.getProjetById)
router.post('/projet',projetCtrl.creeProjet)
router.delete('/projet/:id',projetCtrl.deletProjet)
router.put('/projet/:id',projetCtrl.modifierProjet)
module.exports=router
