/**
 * Clase que representa una respuesta de API.
 */
class ApiResponse {
	/**
	 * Enviar una respuesta de éxito.
	 * @param {Object} res - El objeto de respuesta.
	 * @param {Object} data - Los datos a enviar.
	 * @param {string} message - El mensaje a enviar.
	 * @param {number} [statusCode=200] - El código de estado HTTP.
	 * @returns {Object} - La respuesta JSON.
	 */
	static success(res, data, message, statusCode = 200) {
		return res.status(statusCode).json({
			resultado: true,
			respuesta: data,
			message,
		})
	}

	/**
	 * Enviar una respuesta de error.
	 * @param {Object} res - El objeto de respuesta.
	 * @param {string} message - El mensaje de error.
	 * @param {number} [statusCode=400] - El código de estado HTTP.
	 * @returns {Object} - La respuesta JSON.
	 */
	static error(res, message, statusCode = 400) {
		return res.status(statusCode).json({
			resultado: false,
			message,
		})
	}
}

module.exports = ApiResponse
