const { z } = require('zod')

const createHabitacionSchema = z.object({
	habitacion_piso: z.number(),
	habitacion_nro: z.number(),
	cant_camas: z.number(),
	tiene_television: z.boolean(),
	tiene_frigobar: z.boolean(),
})

const updateHabitacionSchema = z.object({
	habitacion_piso: z.number().optional(),
	habitacion_nro: z.number().optional(),
	cant_camas: z.number().optional(),
	tiene_television: z.boolean().optional(),
	tiene_frigobar: z.boolean().optional(),
})

module.exports = {
	createHabitacionSchema,
	updateHabitacionSchema,
}
