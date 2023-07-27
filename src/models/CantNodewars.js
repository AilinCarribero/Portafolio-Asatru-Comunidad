const { Schema , model } = require('mongoose');

//Guardo datos en la base de datos
const Nodewars = new Schema({
    cant: { type: Number , default: 0},
    puntos: { type: Number , default: 0}
});

module.exports = model('Nodewrs', Nodewars);