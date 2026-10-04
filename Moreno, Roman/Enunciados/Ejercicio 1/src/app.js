const express = require('express');
const bodyParser = require('body-parser');
const rectangulosRoutes = require('./routes/rectangulos');

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/rectangulos', rectangulosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Rectángulos - Ejercicio 1' });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Recurso no encontrado' });
});

module.exports = app;