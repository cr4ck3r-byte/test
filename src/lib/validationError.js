/**
 * Represents a custom error class for validation errors.
 * @param {string} message - The error message.
 */
class ValidationError extends Error {
	constructor(message) {
		super(message)
		this.name = 'ValidationError'
	}
}

module.exports = { ValidationError }
