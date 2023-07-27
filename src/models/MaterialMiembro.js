const { Schema , model } = require('mongoose');

//Guardo datos en la base de datos
const MaterialMiembro = new Schema({
    nombre: { type: String , required: true},
    material: { type: String , required: true},
    cantMaterial: { type: Number , default: 0}
});

module.exports = model('MaterialMiembro', MaterialMiembro);