// Archivo: routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Ruta para crear un usuario
router.post('/crear', usuariosController.crearUsuario);

module.exports = router;
