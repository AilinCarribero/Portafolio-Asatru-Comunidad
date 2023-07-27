const { Schema , model } = require('mongoose');

//Guardo datos en la base de datos
const Galeria = new Schema({
    titulo: { type: String , required: true},
    img: { type: String , required: true},
    descripcion: { type: String},
});

module.exports = model('Galeria',Galeria);