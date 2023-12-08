// routes/turnosRoutes.js
const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

// Ruta para reservar un turno
router.post('/reservar', turnosController.reservarTurno);

module.exports = router;
