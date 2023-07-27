const { Schema , model } = require('mongoose');

//Guardo datos en la base de datos
const Miembro = new Schema({
    nombre: { type: String , required: true},
    caza: { type: Number , default: 0},
    puntosCaza: { type: Number , default: 0},
    extras: { type: Number , default: 0},
    puntosExtras: { type: Number , default: 0},
    node: { type: Number , default: 0},
    puntosNode: { type: Number , default: 0},
    cantNodewars: { type: Number , default: 0},
    TyP: { type: Number , default: 0},
    puntosTyP: { type: Number , default: 0},
    puntosSobrantes:  { type: Number , default: 0},
    canje: { type: Number , default: 0},
    state: {type: Number , default: 0}
});

module.exports = model('Miembro',Miembro);

