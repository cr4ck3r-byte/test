const { HttpError } = require('../../lib/httpError.js')
const { validatePhoneNumber } = require('../../utils/phoneValidator.js')
const {
	createPersona,
	getPersonaById,
	getPersonas,
	updatePersona,
	deletePersona,
	getPersonaByPhone,
	getPersonaByEmail,
	getPersonaByDocument,
} = require('./persona.DAL.js')

const createPersonaService = async (nombre_completo, nr_documento, correo, telefono) => {
	try {
		await validatePersonaData(null, { telefono, correo, nr_documento })

		return await createPersona(nombre_completo, nr_documento, correo, telefono)
	} catch (error) {
		throw error
	}
}

const getPersonaByIdService = async id => {
	try {
		return await getPersonaById(id)
	} catch (error) {
		throw error
	}
}

const getPersonasService = async () => {
	try {
		return await getPersonas()
	} catch (error) {
		throw error
	}
}

const updatePersonaService = async (id, updateData) => {
	try {
		const persona = await getPersonaById(id)
		if (!persona[0]) throw new HttpError('Persona not found', 400)

		await validatePersonaData(id, updateData)

		await updatePersona(id, updateData)
		return
	} catch (error) {
		throw error
	}
}

const deletePersonaService = async id => {
	try {
		await deletePersona(id)
		return
	} catch (error) {
		throw error
	}
}

async function validatePersonaData(id = null, data) {
	if (data?.telefono !== undefined) {
		const isPhoneExist = await getPersonaByPhone(data?.telefono)

		if (isPhoneExist[0] && isPhoneExist[0].id !== Number(id)) {
			throw new HttpError('Phone number already exists', 400)
		}
		if (!validatePhoneNumber(data?.telefono)) {
			throw new HttpError('Invalid phone number', 400)
		}
	}

	if (data?.correo !== undefined) {
		const isEmailExist = await getPersonaByEmail(data?.correo)
		if (isEmailExist[0] && isEmailExist[0].id !== Number(id)) {
			throw new HttpError('Email already exists', 400)
		}
	}

	if (data?.nr_documento !== undefined) {
		const isDocumentExist = await getPersonaByDocument(data?.nr_documento)

		if (isDocumentExist[0] && isDocumentExist[0].id !== Number(id)) {
			throw new HttpError('Document already exists', 400)
		}
	}
}

module.exports = {
	createPersonaService,
	getPersonaByIdService,
	getPersonasService,
	updatePersonaService,
	deletePersonaService,
}
