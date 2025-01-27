const { asyncHandler } = require('../../lib/asyncHandler')
const ApiResponse = require('../../lib/apiResponse')
const {
	createReservaService,
	getReservaByIdService,
	getReservasService,
	updateReservaService,
	deleteReservaService,
} = require('./reserva.service')

const createReservaController = asyncHandler(async (req, res) => {
	const { fecha_entrada, fecha_salida, habitacion_id, persona_id, monto_reserva } = req.body

	const result = await createReservaService(fecha_entrada, fecha_salida, habitacion_id, persona_id, monto_reserva)
	return ApiResponse.success(res, result, 201)
})

const getReservaByIdController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const result = await getReservaByIdService(id)
	return ApiResponse.success(res, result, 200)
})

const getReservasController = asyncHandler(async (req, res) => {
	const result = await getReservasService()
	return ApiResponse.success(res, result, 200)
})

const updateReservaController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const data = req.body

	const result = await updateReservaService(id, data)
	return ApiResponse.success(res, result, 200)
})

const deleteReservaController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const result = await deleteReservaService(id)
	return ApiResponse.success(res, result, 200)
})

module.exports = {
	createReservaController,
	getReservaByIdController,
	getReservasController,
	updateReservaController,
	deleteReservaController,
}
