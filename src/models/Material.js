const { Schema , model } = require('mongoose');

//Guardo datos en la base de datos
const Material = new Schema({
    material: { type: String , required: true},
    cantidad: { type: Number , default: 0},
    faltan: { type: Number , default: 0}
});

module.exports = model('Material', Material);