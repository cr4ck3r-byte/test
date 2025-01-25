const express = require("express");
const {
  createPersonaController,
  deletePersonaController,
  getPersonaByIdController,
  getPersonasController,
  updatePersonaController,
} = require("./persona.controller");
const router = express.Router();

router.post("/", createPersonaController);
router.get("/", getPersonasController);
router.get("/:id", getPersonaByIdController);
router.put("/:id", updatePersonaController);
router.delete("/:id", deletePersonaController);

module.exports = { router };
