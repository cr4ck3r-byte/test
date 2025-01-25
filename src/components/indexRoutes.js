// components/indexRoutes.js
const { readdirSync } = require("fs");
const path = require("path");
const { Router } = require("express");

const router = Router();
const PATH_ROUTER = __dirname;

readdirSync(PATH_ROUTER).forEach((dirName) => {
  // Ignorar archivos y directorios especiales
  if (
    dirName === "indexRoutes.js" ||
    dirName.startsWith(".") ||
    dirName === "__mocks__"
  )
    return;

  const routePath = path.join(PATH_ROUTER, dirName, `${dirName}.routes.js`);

  try {
    const routeModule = require(routePath);
    if (routeModule?.router) {
      router.use(`/${dirName}`, routeModule.router);
    }
  } catch (error) {
    console.error(`Error cargando ruta ${dirName}:`, error.message);
  }
});

module.exports = { router };
