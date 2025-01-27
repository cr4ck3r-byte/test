const { connection } = require('../../database')
const { buildUpdateSet } = require('../../utils/queryBuilder')

const createReserva = ({ fecha_reserva, fecha_entrada, fecha_salida, habitacion_id, persona_id, monto_reserva }) => {
	return new Promise((resolve, reject) => {
		const query =
			'INSERT INTO reserva (fecha_reserva, fecha_entrada, fecha_salida, habitacion_id, persona_id, monto_reserva) VALUES (?, ?, ?, ?, ?, ?)'
		connection.query(
			query,
			[fecha_reserva, fecha_entrada, fecha_salida, habitacion_id, persona_id, monto_reserva],
			(err, result) => {
				if (err) {
					reject(err)
				}
				resolve(result)
			},
		)
	})
}

const getReservaById = id => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM reserva WHERE id = ?'
		connection.query(query, [id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getReservas = () => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM reserva'
		connection.query(query, (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getReservaByDate = (habitacion_id, fecha_entrada, fecha_salida) => {
	const query = `
		SELECT * 
		FROM reserva
		WHERE habitacion_id = ?
		  AND (
		    (fecha_entrada <= ? AND fecha_salida >= ?) OR
		    (fecha_entrada <= ? AND fecha_salida >= ?) OR
		    (fecha_entrada >= ? AND fecha_salida <= ?)
		  )
	`

	const params = [habitacion_id, fecha_entrada, fecha_entrada, fecha_salida, fecha_salida, fecha_entrada, fecha_salida]
	return new Promise((resolve, reject) => {
		connection.query(query, params, (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const updateReserva = (id, updatedFields) => {
	const ALLOWED_FIELDS = ['fecha_entrada', 'fecha_salida', 'habitacion_id', 'persona_id']

	const { setClause, values } = buildUpdateSet(updatedFields, ALLOWED_FIELDS)
	const query = `UPDATE reserva SET ${setClause} WHERE id = ?`
	return new Promise((resolve, reject) => {
		connection.execute(query, [...values, id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const deleteReserva = id => {
	return new Promise((resolve, reject) => {
		const query = 'DELETE FROM reserva WHERE id = ?'
		connection.query(query, [id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

module.exports = {
	createReserva,
	getReservaById,
	getReservaByDate,
	getReservas,
	updateReserva,
	deleteReserva,
}
