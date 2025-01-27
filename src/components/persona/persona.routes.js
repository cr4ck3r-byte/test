const express = require('express')
const {
	createPersonaController,
	deletePersonaController,
	getPersonaByIdController,
	getPersonasController,
	updatePersonaController,
} = require('./persona.controller')
const validation = require('../../middlewares/validation')
const { createPersonaSchema, updatePersonaSchema } = require('./persona.validations')
const router = express.Router()

router.post('/', validation(createPersonaSchema), createPersonaController)
router.put('/:id', validation(updatePersonaSchema), updatePersonaController)
router.get('/', getPersonasController)
router.get('/:id', getPersonaByIdController)
router.delete('/:id', deletePersonaController)

module.exports = { router }
