const { Router } = require('express')
const { readdirSync } = require('fs')
const path = require('path')

const PATH_ROUTER = __dirname
const router = Router()

readdirSync(PATH_ROUTER).forEach(dirName => {
	const dirNameHasDot = dirName.includes('.')
	const isCurrentFile = dirName === path.basename(__filename)

	if (!dirNameHasDot && !isCurrentFile) {
		try {
			const routeFile = path.join(PATH_ROUTER, dirName, `${dirName}.routes.js`)
			const module = require(routeFile)

			// Verificar que el módulo tenga un router exportado
			if (module.router) {
				router.use(`/${dirName}`, module.router)
			} else {
				console.error(`El archivo ${routeFile} no exporta un router válido`)
			}
		} catch (error) {
			console.error(`Error cargando ruta ${dirName}:`, error)
		}
	}
})

module.exports = { router }
