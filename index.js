// Archivo: index.js
const express = require('express');
const app = express();
const turnosRoutes = require('./routes/turnosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');  // Nueva importación
const routes = require('./routes');
const mysql = require('mysql2');

// Configuración de Express para manejar solicitudes JSON
app.use(express.urlencoded({ extended: true }));


// Configuración de archivos estáticos (si es necesario)
app.use(express.static('public'));

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elioli88',
  database: 'agenda',
  port: 3306
});

// Verificar la conexión a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

// Configuración de las rutas
app.use('/turnos', turnosRoutes);
app.use('/usuarios', usuariosRoutes);  // Nueva ruta para usuarios
app.use('/', routes);

// Iniciar el servidor en el puerto 3000
const port = 3000;  // O el puerto que desees
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
