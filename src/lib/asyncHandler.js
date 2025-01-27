/**
 * Una función de orden superior que envuelve una función asincrónica y captura cualquier error,
 * pasándolos al siguiente middleware en el ciclo de solicitud-respuesta de Express.
 *
 * @param {Function} fn - La función asincrónica que se va a envolver.
 * @returns {Function} Una nueva función que envuelve la función original con manejo de errores.
 */

const asyncHandler = fn => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next)
	}
}

module.exports = { asyncHandler }
