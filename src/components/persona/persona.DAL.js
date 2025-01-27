const { connection } = require('../../database')
const { buildUpdateSet } = require('../../utils/queryBuilder')

const createPersona = (nombre_completo, nr_documento, correo, telefono) => {
	return new Promise((resolve, reject) => {
		const query = 'INSERT INTO persona (nombre_completo, nr_documento, correo, telefono) VALUES (?, ?, ?, ?)'
		connection.query(query, [nombre_completo, nr_documento, correo, telefono], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getPersonaById = id => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM persona WHERE id = ?'
		connection.query(query, [id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getPersonas = () => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM persona'
		connection.query(query, (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getPersonaByPhone = telefono => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM persona WHERE telefono = ?'
		connection.query(query, [telefono], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getPersonaByEmail = correo => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM persona WHERE correo = ?'
		connection.query(query, [correo], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const getPersonaByDocument = nr_documento => {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM persona WHERE nr_documento = ?'
		connection.query(query, [nr_documento], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const updatePersona = (id, updatedFields) => {
	// Campos permitidos para actualizar
	const ALLOWED_FIELDS = ['nombre_completo', 'nr_documento', 'telefono', 'correo']

	const { setClause, values } = buildUpdateSet(updatedFields, ALLOWED_FIELDS)
	const query = `UPDATE persona SET ${setClause} WHERE id = ?`
	return new Promise((resolve, reject) => {
		connection.execute(query, [...values, id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

const deletePersona = id => {
	return new Promise((resolve, reject) => {
		const query = 'DELETE FROM persona WHERE id = ?'
		connection.query(query, [id], (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	})
}

module.exports = {
	createPersona,
	getPersonaById,
	getPersonas,
	getPersonaByPhone,
	getPersonaByEmail,
	getPersonaByDocument,
	updatePersona,
	deletePersona,
}
