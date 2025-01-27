const { z } = require('zod')

const createPersonaSchema = z.object({
	nombre_completo: z.string().min(3).max(255),
	nr_documento: z.string().min(3).max(255),
	correo: z.string().email(),
	telefono: z.string().min(10).max(255),
})

const updatePersonaSchema = z.object({
	nombre_completo: z.string().min(3).max(255).optional(),
	nr_documento: z.string().min(3).max(255).optional(),
	correo: z.string().email().optional(),
	telefono: z.string().min(10).max(255).optional(),
	id: z.number(),
})

module.exports = {
	createPersonaSchema,
	updatePersonaSchema,
}
