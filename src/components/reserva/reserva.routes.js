const express = require('express')
const router = express.Router()
const {
	createReservaController,
	getReservasController,
	deleteReservaController,
	updateReservaController,
	getReservaByIdController,
} = require('./reserva.controller')
const { createReservaSchema, updateReservaSchema } = require('./reserva.validations')
const validation = require('../../middlewares/validation')

router.post('/', validation(createReservaSchema), createReservaController)
router.get('/', getReservasController)
router.get('/:id', getReservaByIdController)
router.put('/:id', validation(updateReservaSchema), updateReservaController)
router.delete('/:id', deleteReservaController)

module.exports = { router }
