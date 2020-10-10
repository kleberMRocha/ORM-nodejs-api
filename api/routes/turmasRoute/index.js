const { Router } = require('express')
const TurmaController = require('../../controllers/TurmaController');

const router = Router()
router
 .get('/turmas', TurmaController.GetTurma)
 .get('/turmas/:id', TurmaController.GetUmaTurma)
 .post('/turmas', TurmaController.CreateTurma)
 .put('/turmas/:id', TurmaController.UpdateTurma)
 .delete('/turmas/:id', TurmaController.DeleteTurma)
module.exports = router