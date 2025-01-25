const { connection } = require("../../database");

const createPersona = (nombre_completo, nr_documento, correo, telefono) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO persona (nombre_completo, nr_documento, correo, telefono) VALUES (?, ?, ?, ?)";
    connection.query(
      query,
      [nombre_completo, nr_documento, correo, telefono],
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

const getPersonaById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM persona WHERE id = ?";
    connection.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const getPersonas = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM persona";
    connection.query(query, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const updatePersona = (id, nombre_completo, nr_documento, correo, telefono) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE persona SET nombre_completo = ?, nr_documento = ?, correo = ?, telefono = ? WHERE id = ?";
    connection.query(
      query,
      [nombre_completo, nr_documento, correo, telefono, id],
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

const deletePersona = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM persona WHERE id = ?";
    connection.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  createPersona,
  getPersonaById,
  getPersonas,
  updatePersona,
  deletePersona,
};
