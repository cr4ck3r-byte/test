class ApiResponse {
	/**
	 * Sends a successful response with the given data, message, and status code.
	 *
	 * @param {Response} res - The response object to send the success status and data.
	 * @param {T} data - The data to be included in the response.
	 * @param {string} message - The message to be included in the response.
	 * @param {number} statusCode - The status code to be included in the response. Defaults to 200.
	 * @return {Promise<Response>} A Promise that resolves to the response object with the success status and data.
	 */
	static success(res, data, message, statusCode = 200) {
		return res.status(statusCode).json({
			resultado: true,
			respuesta: data,
			message,
		})
	}
	/**
	 * Sends an error response with the given message and status code.
	 *
	 * @param {Response} res - The response object to send the error status and message.
	 * @param {string} message - The error message to be included in the response.
	 * @param {number} statusCode - The status code to be included in the response. Defaults to 400.
	 * @return {Object} The error response object.
	 */

	static error(res, message, statusCode = 400) {
		return res.status(statusCode).json({
			resultado: false,
			message,
		})
	}
}

module.exports = ApiResponse
