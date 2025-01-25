// const { logger } = require("../utils/logger");
const { ApiResponse } = require("../lib/apiResponse");
const { HttpError } = require("../lib/httpError");
// const { ZodError } = require("zod");
const { ValidationError } = require("../lib/validationError");

/**
 * Middleware de manejo de errores.
 *
 * @param {Error} err - El error lanzado.
 * @param {import('express').Request} req - El objeto de solicitud de Express.
 * @param {import('express').Response} res - El objeto de respuesta de Express.
 * @param {import('express').NextFunction} next - La función next de Express.
 * @returns {void}
 */
const errorHandler = (err, req, res, next) => {
  // Loguea todos los errores
  // logger.error(err);

  // Manejo de errores de validación de Zod
  // if (err instanceof ZodError) {
  //   const errorMessages = err.errors
  //     .map((error) => `${error.message}`)
  //     .join(", ");
  //   return ApiResponse.error(res, errorMessages, 400);
  // }

  // Manejo de errores de validación personalizados
  if (err instanceof ValidationError) {
    return ApiResponse.error(res, err.message, 400);
  }

  // Manejo de errores HTTP personalizados
  if (err instanceof HttpError) {
    return ApiResponse.error(res, err.message, err.statusCode);
  }

  // Manejo de errores internos del servidor
  return ApiResponse.error(res, "Internal Server Error", 500);
};

module.exports = { errorHandler };
