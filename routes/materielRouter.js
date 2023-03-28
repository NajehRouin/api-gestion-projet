const router=require('express').Router()
const materielCtrl = require('../controlles/materielCtrl');

const auth=require('../middleware/auth');
const authAdmin=require('../middleware/authadmin')

router.get('/materiel',materielCtrl.getMaterials);

router.post('/matereil',materielCtrl.Ajouter)
router.delete('/matereil/:id',materielCtrl.deleteMateriel)   
module.exports=router