// routes/index.js
const express = require('express');
const router = express.Router();
const turnosRoutes = require('./turnosRoutes');

// Configuración de las rutas
router.use('/turnos', turnosRoutes);

module.exports = router;
