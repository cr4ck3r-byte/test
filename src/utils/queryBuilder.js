const { HttpError } = require('../lib/httpError')

/**
 * Construye la cláusula SET y los valores para una sentencia SQL UPDATE.
 *
 * @param {Object} fields - Un objeto que contiene los campos a actualizar y sus nuevos valores.
 * @param {Array<string>} [allowedFields=[]] - Un array opcional de nombres de campos permitidos. Si se proporciona, solo estos campos se incluirán en la cláusula SET.
 * @returns {Object} Un objeto que contiene la cláusula SET como una cadena y un array de valores.
 * @throws {HttpError} Si no se encuentran campos válidos para actualizar.
 */
const buildUpdateSet = (fields, allowedFields = []) => {
	// Filtrar campos permitidos si se especifican
	const validFields =
		allowedFields.length > 0 ? Object.keys(fields).filter(field => allowedFields.includes(field)) : Object.keys(fields)

	if (validFields.length === 0) {
		throw new HttpError('No hay campos válidos para actualizar', 400)
	}

	// Construir SET clause y valores
	const setClause = validFields.map(field => `${field} = ?`).join(', ')
	const values = validFields.map(field => fields[field])

	return {
		setClause,
		values,
	}
}

module.exports = { buildUpdateSet }
