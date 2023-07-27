const mongoose = require('mongoose');
const { Schema } = require ('mongoose');
const { model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    nombreFamilia: { type: String , required: true},
    contrasegna: { type: String , required: true},
    rol: {type: Number , default: 0}
});

/*Roll: 0 -> invitado, 1 -> miembro, 2 -> oficial */

userSchema.methods.encryptPassword = (contrasegna) => {
    return bcrypt.hashSync(contrasegna, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (contrasegna) { 
    return bcrypt.compareSync(contrasegna , this.contrasegna);
};

module.exports = model('Usuarios', userSchema);