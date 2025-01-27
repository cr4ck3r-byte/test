/**
 * Representa un error HTTP.
 * @extends Error
 */
class HttpError extends Error {
	/**
	 * El código de estado HTTP asociado con el error.
	 * @type {number}
	 */
	statusCode

	/**
	 * Crea una instancia de HttpError.
	 * @param {string} message - El mensaje de error.
	 * @param {number} statusCode - El código de estado HTTP.
	 */
	constructor(message, statusCode) {
		super(message)
		this.statusCode = statusCode
	}
}
module.exports = { HttpError }
