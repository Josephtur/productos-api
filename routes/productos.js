
const express  = require('express');
const Producto = require('../models/PRODUCTO');
const enrutador = express.Router();


enrutador.get('/', async (req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.json(listaProductos);
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
});


enrutador.get('/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: 'ID inválido' });
  }
});


enrutador.post('/', async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = enrutador;

