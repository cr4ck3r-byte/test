const { asyncHandler } = require('../../lib/asyncHandler')
const ApiResponse = require('../../lib/apiResponse')
const {
	createPersonaService,
	getPersonaByIdService,
	getPersonasService,
	updatePersonaService,
	deletePersonaService,
} = require('./persona.service')

const createPersonaController = asyncHandler(async (req, res) => {
	const { nombre_completo, nr_documento, correo, telefono } = req.body
	const result = await createPersonaService(nombre_completo, nr_documento, correo, telefono)
	return ApiResponse.success(res, result, 201)
})

const getPersonaByIdController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const result = await getPersonaByIdService(id)
	return ApiResponse.success(res, result, 200)
})

const getPersonasController = asyncHandler(async (req, res) => {
	const result = await getPersonasService()
	return ApiResponse.success(res, result, 200)
})

const updatePersonaController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const updateData = req.body
	const result = await updatePersonaService(id, updateData)
	return ApiResponse.success(res, result, 200)
})

const deletePersonaController = asyncHandler(async (req, res) => {
	const { id } = req.params
	const result = await deletePersonaService(id)
	return ApiResponse.success(res, result, 200)
})

module.exports = {
	createPersonaController,
	getPersonaByIdController,
	getPersonasController,
	updatePersonaController,
	deletePersonaController,
}
