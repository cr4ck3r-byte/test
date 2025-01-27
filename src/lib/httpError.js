/**
 * Constructs a new HttpError object with the given message and status code.
 *
 * @param {string} message - The error message.
 * @param {number} statusCode - The HTTP status code associated with the error.
 */
class HttpError extends Error {
	statusCode

	constructor(message, statusCode) {
		super(message)
		this.statusCode = statusCode
	}
}
module.exports = { HttpError }
