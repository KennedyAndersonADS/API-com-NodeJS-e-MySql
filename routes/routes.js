const express = require('express')
const router = express.Router()
const atendimentoControllers = require('../controllers/atendimentoControllers')
const medicoControllers = require('../controllers/medicoControllers')
const pacienteControllers = require('../controllers/pacienteControllers')
    
router.get('/', (req, res) => {
    res.status(200).send("Api de Atendimento Hospitalar");
})

router.post('/atendimento', atendimentoControllers.createAtendimento)
router.get('/atendimento', atendimentoControllers.showAtendimentos)
router.get('/atendimento/:id', atendimentoControllers.showAtendimento)
router.put('/atendimento/:id', atendimentoControllers.updateAtendimento);
router.delete('/atendimento/:id', atendimentoControllers.deleteAtendimento);

router.post('/medico', medicoControllers.createMedico);
router.get('/medico', medicoControllers.showMedicos);
router.get('/medico/:id', medicoControllers.showMedico);
router.get('/medico/:id/atendimentos', medicoControllers.medicoAtendimentos)
router.put('/medico/:id', medicoControllers.updateMedico);
router.delete('/medico/:id', medicoControllers.deleteMedico);

router.post('/paciente', pacienteControllers.createPaciente);
router.get('/paciente', pacienteControllers.showPacientes);
router.get('/paciente/:id', pacienteControllers.showPaciente);
router.get('/paciente/:id/atendimentos', pacienteControllers.pacienteAtendimentos)
router.put('/paciente/:id', pacienteControllers.updatePaciente);
router.delete('/paciente/:id', pacienteControllers.deletePaciente);

module.exports = router