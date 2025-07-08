const mongoose = require('mongoose');

const esquemaProducto = new mongoose.Schema({
  origen:   { type: String, required: true },  
  precio:   { type: Number, required: true },  
  producto:  { type: String, required: true }                   
});


module.exports = mongoose.model('Producto', esquemaProducto);

