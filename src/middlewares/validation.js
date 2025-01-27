/**
 * Función middleware para validar el cuerpo de la solicitud contra un esquema dado.
 *
 * @param {Object} schema - El esquema para validar el cuerpo de la solicitud.
 * @returns {Function} Función middleware que valida el cuerpo de la solicitud.
 */
const validation = schema => (req, res, next) => {
	try {
		schema.parse(req.body)
		next()
	} catch (error) {
		next(error)
	}
}

module.exports = validation
