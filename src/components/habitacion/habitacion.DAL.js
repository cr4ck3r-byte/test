const { connection } = require('../../database.js')
const { buildUpdateSet } = require('../../utils/queryBuilder.js')

const createHabitacion = (habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar) => {
	return new Promise((resolve, reject) => {
		const query =
			'INSERT INTO habitacion (habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar) VALUES (?, ?, ?, ?, ?)'
		connection.query(query, [habitacion_piso, habitacion_nro, cant_camas, tiene_television, tiene_frigobar], (error, results) => {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

const getHabitacionById = id => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM habitacion WHERE id = ?'
		connection.query(query, [id], (error, results) => {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

const getHabitaciones = () => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM habitacion'
		connection.query(query, (error, results) => {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

const getHabitacionByNroAndPiso = (habitacion_nro, habitacion_piso) => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM habitacion WHERE habitacion_nro = ? AND habitacion_piso = ?'
		connection.query(query, [habitacion_nro, habitacion_piso], (error, results) => {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

const updateHabitacion = (id, updatedFields) => {
	const ALLOWED_FIELDS = ['habitacion_piso', 'habitacion_nro', 'cant_camas', 'tiene_television', 'tiene_frigobar']
	const { setClause, values } = buildUpdateSet(updatedFields, ALLOWED_FIELDS)
	const query = `UPDATE habitacion SET ${setClause} WHERE id = ?`

	return new Promise((resolve, reject) => {
		connection.execute(query, [...values, id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const deleteHabitacion = id => {
	return new Promise((resolve, reject) => {
		const query = 'DELETE FROM habitacion WHERE id = ?'
		connection.query(query, [id], (error, results) => {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

module.exports = {
	createHabitacion,
	getHabitacionById,
	getHabitacionByNroAndPiso,
	getHabitaciones,
	updateHabitacion,
	deleteHabitacion,
}
