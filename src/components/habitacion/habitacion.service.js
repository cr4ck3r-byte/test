const {
	createHabitacion,
	getHabitacionById,
	getHabitaciones,
	updateHabitacion,
	deleteHabitacion,
	getHabitacionByNroAndPiso,
} = require('./habitacion.DAL.js')
const { HttpError } = require('../../lib/httpError.js')

const createHabitacionService = async (habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar) => {
	try {
		await validateHabitacionData(null, { habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar })

		const result = await createHabitacion(habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar)
		return result
	} catch (error) {
		throw error
	}
}

const getHabitacionByIdService = async id => {
	try {
		const result = await getHabitacionById(id)
		return result
	} catch (error) {
		throw error
	}
}

const getHabitacionesService = async () => {
	try {
		const result = await getHabitaciones()
		return result
	} catch (error) {
		throw error
	}
}

const updateHabitacionService = async (id, updateData) => {
	try {
		const habitacionExist = await getHabitacionById(id)
		if (!habitacionExist[0]) throw new HttpError('Habitación no encontrada', 400)

		await validateHabitacionData(id, updateData)

		const result = await updateHabitacion(id, updateData)
		return result
	} catch (error) {
		throw error
	}
}

const deleteHabitacionService = async id => {
	try {
		const result = await deleteHabitacion(id)
		return result
	} catch (error) {
		throw error
	}
}

async function validateHabitacionData(id = null, data) {
	if (data?.habitacion_piso !== undefined) {
		if (data?.habitacion_piso <= 0 || data?.habitacion_piso > 10) {
			throw new HttpError('Piso no válido', 400)
		}
		//Validar que no exista 2 habitaciones con el mismo número en el mismo piso
		const pisoNroExist = await getHabitacionByNroAndPiso(data.habitacion_nro, data.habitacion_piso)
		if (pisoNroExist[0]) {
			if (id !== null && pisoNroExist[0].id !== Number(id)) {
				throw new HttpError('Número de habitación ya existe en el piso', 400)
			} else if (id === null) {
				throw new HttpError('Número de habitación ya existe en el piso', 400)
			}
		}
	}
	if (data?.habitacion_nro !== undefined) {
		if (data.habitacion_nro <= 0 || data.habitacion_nro > 20) {
			throw new HttpError('Número de habitación no válido', 400)
		}
	}

	if (data?.cant_camas !== undefined) {
		if (data?.cant_camas <= 0 || data?.cant_camas > 5) {
			throw new HttpError('Cantidad de camas no válida', 400)
		}
	}
}

module.exports = {
	createHabitacionService,
	getHabitacionByIdService,
	getHabitacionesService,
	updateHabitacionService,
	deleteHabitacionService,
}
