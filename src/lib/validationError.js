/**
 * Clase de error personalizada para errores de validación.
 *
 * @class ValidationError
 * @extends {Error}
 *
 * @param {string} message - El mensaje de error.
 */
class ValidationError extends Error {
	constructor(message) {
		super(message)
		this.name = 'ValidationError'
	}
}

module.exports = { ValidationError }
