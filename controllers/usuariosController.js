// Archivo: controllers/usuariosController.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elioli88',
  database: 'agenda',
  port: 3306
});

exports.crearUsuario = (req, res) => {
  // Lógica para crear un usuario
  const { usuario_id, nombre, correo, telefono, contrasena } = req.body;

  // Validaciones
  if (!usuario_id || !nombre || !correo || !telefono || !contrasena) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  // Ejemplo: Insertar datos en la base de datos
  const query = 'INSERT INTO Usuarios (usuario_id, nombre, correo, telefono, contrasena) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [usuario_id, nombre, correo, telefono, contrasena], (err, results) => {
    if (err) {
      console.error('Error al crear usuario:', err);
      return res.status(500).json({ mensaje: 'Error al crear usuario' });
    } 

    res.json({ mensaje: 'Usuario creado con éxito'});
    // Lógica adicional si es necesario
});
};


