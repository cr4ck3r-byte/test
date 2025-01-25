const {
  createPersona,
  getPersonaById,
  getPersonas,
  updatePersona,
  deletePersona,
} = require("./persona.DAL.js");

const createPersonaService = async (
  nombre_completo,
  nr_documento,
  correo,
  telefono
) => {
  try {
    return await createPersona(nombre_completo, nr_documento, correo, telefono);
  } catch (error) {
    throw error;
  }
};

const getPersonaByIdService = async (id) => {
  try {
    return await getPersonaById(id);
  } catch (error) {
    throw error;
  }
};

const getPersonasService = async () => {
  try {
    return await getPersonas();
  } catch (error) {
    throw error;
  }
};

const updatePersonaService = async (
  id,
  nombre_completo,
  nr_documento,
  correo,
  telefono
) => {
  try {
    return await updatePersona(
      id,
      nombre_completo,
      nr_documento,
      correo,
      telefono
    );
  } catch (error) {
    throw error;
  }
};

const deletePersonaService = async (id) => {
  try {
    return await deletePersona(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPersonaService,
  getPersonaByIdService,
  getPersonasService,
  updatePersonaService,
  deletePersonaService,
};
