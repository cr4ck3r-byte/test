const { parsePhoneNumberFromString } = require('libphonenumber-js')

const DEFAULT_COUNTRY_CODE = 'PY'

const validatePhoneNumber = (phone, countryCode = DEFAULT_COUNTRY_CODE) => {
	try {
		const phoneNumber = parsePhoneNumberFromString(phone, countryCode)
		return phoneNumber?.isValid() || false
	} catch {
		return false
	}
}

const formatPhoneNumber = (phone, countryCode = DEFAULT_COUNTRY_CODE) => {
	const phoneNumber = parsePhoneNumberFromString(phone, countryCode)
	return phoneNumber?.formatInternational() || null
}

module.exports = {
	validatePhoneNumber,
	formatPhoneNumber,
}
