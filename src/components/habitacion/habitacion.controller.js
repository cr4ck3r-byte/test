const {
	createHabitacionService,
	getHabitacionByIdService,
	getHabitacionesService,
	updateHabitacionService,
	deleteHabitacionService,
} = require('./habitacion.service')
const ApiResponse = require('../../lib/apiResponse')
const { asyncHandler } = require('../../lib/asyncHandler')

const createHabitacionController = asyncHandler(async (req, res) => {
	const { habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar } = req.body

	const result = await createHabitacionService(habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar)
	return ApiResponse.success(res, result, 201)
})

const getHabitacionByIdController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const result = await getHabitacionByIdService(id)
	return ApiResponse.success(res, result, 200)
})

const getHabitacionesController = asyncHandler(async (req, res) => {
	const result = await getHabitacionesService()
	return ApiResponse.success(res, result, 200)
})

const updateHabitacionController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const updateData = req.body

	const result = await updateHabitacionService(id, updateData)
	return ApiResponse.success(res, result, 200)
})

const deleteHabitacionController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const result = await deleteHabitacionService(id)
	return ApiResponse.success(res, result, 200)
})

module.exports = {
	createHabitacionController,
	getHabitacionByIdController,
	getHabitacionesController,
	updateHabitacionController,
	deleteHabitacionController,
}
