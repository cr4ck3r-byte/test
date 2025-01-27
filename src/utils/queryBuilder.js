const { HttpError } = require('../lib/httpError')

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
