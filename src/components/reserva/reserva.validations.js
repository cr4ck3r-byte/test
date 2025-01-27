const { z } = require('zod')

const createReservaSchema = z.object({
	fecha_entrada: z.string().nonempty(),
	fecha_salida: z.string().nonempty(),
	habitacion_id: z.number().int(),
	persona_id: z.number().int(),
})

const updateReservaSchema = z.object({
	fecha_entrada: z.string().nonempty().optional(),
	fecha_salida: z.string().nonempty().optional(),
	habitacion_id: z.number().int().optional(),
	persona_id: z.number().int().optional(),
})

module.exports = {
	createReservaSchema,
	updateReservaSchema,
}
