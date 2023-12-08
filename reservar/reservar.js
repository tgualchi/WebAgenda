// Rutas para la reserva de turnos
app.post('/reservar', (req, res) => {
    const { fecha, hora } = req.body;
  
    // Verificar disponibilidad del horario en la base de datos
    const verificarDisponibilidadQuery = `
      SELECT id FROM Turnos
      WHERE id_horario = ? AND fecha = ? AND estado = 'disponible'
    `;
    db.query(verificarDisponibilidadQuery, [idHorario, fecha], (error, resultados) => {
      if (error) {
        console.error('Error al verificar la disponibilidad del horario:', error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
      }
  
      if (resultados.length === 0) {
        return res.status(400).json({ mensaje: 'El horario no está disponible' });
      }
  
      // Actualizar el estado del turno a 'reservado'
      const reservarTurnoQuery = `
        UPDATE Turnos SET estado = 'reservado'
        WHERE id_horario = ? AND fecha = ? AND estado = 'disponible'
      `;
      db.query(reservarTurnoQuery, [idHorario, fecha], (error) => {
        if (error) {
          console.error('Error al reservar el turno:', error);
          return res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
  
        res.json({ mensaje: 'Turno reservado con éxito' });
      });
    });
  });
  