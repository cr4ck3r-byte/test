const express = require('express')
const router = express.Router()
const {
	createHabitacionController,
	getHabitacionByIdController,
	getHabitacionesController,
	updateHabitacionController,
	deleteHabitacionController,
} = require('./habitacion.controller')
const validation = require('../../middlewares/validation')
const { createHabitacionSchema, updateHabitacionSchema } = require('./habitacion.validations')

router.get('/', getHabitacionesController)
router.post('/', validation(createHabitacionSchema), createHabitacionController)
router.get('/:id', getHabitacionByIdController)
router.put('/:id', validation(updateHabitacionSchema), updateHabitacionController)
router.delete('/:id', deleteHabitacionController)

module.exports = { router }
