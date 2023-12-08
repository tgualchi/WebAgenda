const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'elioli88',
  database: 'agenda',
  port: 3306
});

exports.reservarTurno = async (req, res) => {
  const { fecha, hora, usuario_id } = req.body;

  // Iniciar la transacción
  db.beginTransaction(async (err) => {
    if (err) {
      console.error('Error al iniciar la transacción:', err);
      return res.status(500).json({ mensaje: 'Error al reservar turno' });
    }

    // Lógica para reservar un turno
    const query = 'INSERT INTO Turnos (fecha, hora, usuario_id) VALUES (?, ?, ?)';
    db.query(query, [fecha, hora, usuario_id], (err, results) => {
      if (err) {
        console.error('Error al reservar turno:', err);
        // Rollback en caso de error
        db.rollback(() => {
          res.status(500).json({ mensaje: 'Error al reservar turno' });
        });
      } else {
        // Commit en caso de éxito
        db.commit((err) => {
          if (err) {
            console.error('Error al hacer commit:', err);
            res.status(500).json({ mensaje: 'Error al reservar turno' });
          } else {
            res.json({ mensaje: 'Turno reservado con éxito' });
          }
        });
      }
    });
  });
};
