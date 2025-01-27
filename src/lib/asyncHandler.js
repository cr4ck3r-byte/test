/**
 * A higher-order function that wraps an asynchronous route handler and catches any errors.
 * This allows you to avoid using try-catch blocks in your route handlers.
 *
 * @param {Function} fn - The asynchronous function to be wrapped.
 * @returns {Function} A function that takes req, res, and next as arguments and executes the wrapped function.
 */
const asyncHandler = fn => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next)
	}
}

module.exports = { asyncHandler }
