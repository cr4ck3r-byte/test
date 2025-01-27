const dayjs = require('dayjs')
const { createReserva, deleteReserva, getReservaById, getReservas, updateReserva, getReservaByDate } = require('./reserva.DAL')
const { MONTO_DIA } = require('../../constants')
const { HttpError } = require('../../lib/httpError')

const createReservaService = async (fecha_entrada, fecha_salida, habitacion_id, persona_id) => {
	try {
		const fecha_reserva = new Date()
		const monto_reserva = dayjs(fecha_salida).diff(dayjs(fecha_entrada), 'day') * MONTO_DIA

		const data = { fecha_reserva, fecha_entrada, fecha_salida, habitacion_id, persona_id, monto_reserva }

		await validateReservaData(null, data)
		const reserva = await createReserva(data)
		return reserva
	} catch (error) {
		throw error
	}
}

const getReservaByIdService = async id => {
	try {
		const reserva = await getReservaById(id)
		return reserva
	} catch (error) {
		throw error
	}
}

const getReservasService = async () => {
	try {
		const reservas = await getReservas()
		return reservas
	} catch (error) {
		throw error
	}
}

const updateReservaService = async (id, data) => {
	try {
		const reservaIsExist = await getReservaById(id)
		if (!reservaIsExist[0]) throw new HttpError('No existe la reserva', 400)

		const updatedData = { ...reservaIsExist[0], ...data }

		await validateReservaData(id, updatedData)

		const reserva = await updateReserva(id, updatedData)
		return reserva
	} catch (error) {
		throw error
	}
}

const deleteReservaService = async id => {
	try {
		const reserva = await deleteReserva(id)
		return reserva
	} catch (error) {
		throw error
	}
}

async function validateReservaData(id = null, data) {
	if (data?.fecha_entrada !== undefined) {
		if (dayjs(data.fecha_entrada).toDate().getTime() < Date.now()) {
			throw new HttpError('La fecha de entrada no puede ser menor a la fecha actual', 400)
		}
	}

	if (data?.fecha_salida !== undefined && data?.fecha_entrada !== undefined) {
		if (dayjs(data.fecha_salida).toDate().getTime() < dayjs(data.fecha_entrada).toDate().getTime()) {
			throw new HttpError('La fecha de salida no puede ser menor a la fecha de entrada', 400)
		}
	}

	if (data?.habitacion_id !== undefined && data?.fecha_entrada !== undefined && data?.fecha_salida) {
		const existReserva = await getReservaByDate(data.habitacion_id, data.fecha_entrada, data.fecha_salida)
		if (existReserva.length !== 0) {
			throw new HttpError('La habitación no está disponible', 400)
		}
	}
}

module.exports = {
	createReservaService,
	getReservaByIdService,
	getReservasService,
	updateReservaService,
	deleteReservaService,
}
