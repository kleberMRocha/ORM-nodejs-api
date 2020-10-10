const { Router } = require('express')
const NivelController = require('../../controllers/NivelController')

const router = Router()
router
 .get('/niveis', NivelController.GetNiveis)
 .get('/niveis/:id', NivelController.GetUmNivel)
 .post('/niveis', NivelController.CreateNivel)
 .put('/niveis/:id', NivelController.UpdateNivel)
 .delete('/niveis/:id', NivelController.DeleteNivel)
module.exports = router