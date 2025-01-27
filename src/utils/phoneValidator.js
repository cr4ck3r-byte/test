const { parsePhoneNumberFromString } = require('libphonenumber-js')
const { DEFAULT_COUNTRY_CODE } = require('../constants')

/**
 * Valida un número de teléfono para un código de país dado.
 *
 * @param {string} phone - El número de teléfono a validar.
 * @param {string} [countryCode=DEFAULT_COUNTRY_CODE] - El código de país a usar para la validación. Por defecto, usa un código de país predefinido.
 * @returns {boolean} - Devuelve true si el número de teléfono es válido, de lo contrario false.
 */
const validatePhoneNumber = (phone, countryCode = DEFAULT_COUNTRY_CODE) => {
	try {
		const phoneNumber = parsePhoneNumberFromString(phone, countryCode)
		return phoneNumber?.isValid() || false
	} catch {
		return false
	}
}

/**
 * Formatea un número de teléfono para un código de país dado.
 *
 * @param {string} phone - El número de teléfono a formatear.
 * @param {string} [countryCode=DEFAULT_COUNTRY_CODE] - El código de país a usar para el formateo. Por defecto, usa un código de país predefinido.
 * @returns {string|null} - Devuelve el número de teléfono formateado en formato internacional, o null si el número no es válido.
 */
const formatPhoneNumber = (phone, countryCode = DEFAULT_COUNTRY_CODE) => {
	const phoneNumber = parsePhoneNumberFromString(phone, countryCode)
	return phoneNumber?.formatInternational() || null
}

module.exports = {
	validatePhoneNumber,
	formatPhoneNumber,
}
