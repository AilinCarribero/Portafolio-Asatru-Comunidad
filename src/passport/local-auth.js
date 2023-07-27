const passport = require ('passport');
const localSatrategy = require ('passport-local').Strategy;

const Usuario = require('../models/Usuarios');

passport.serializeUser((usuario , done) => {
    done(null , usuario.id);
});

passport.deserializeUser(async(id , done) => {
    const usuario = await Usuario.findById(id);
    done(null , usuario);
});

passport.use('local-signup' , new localSatrategy({
    usernameField: 'nombreFamilia',
    passwordField: 'contrasegna',
    passReqToCallback: true
}, async (req , nombreFamilia , contrasegna , done) => {

    const coincidencia = await Usuario.findOne({nombreFamilia: nombreFamilia});

    if(coincidencia){
        return done(null , false , req.flash('signupMessage' , 'El nombre de familia ya existe'));
    }
    else{
        const nuevoUsuario = new Usuario();
        nuevoUsuario.nombreFamilia = nombreFamilia;
        nuevoUsuario.contrasegna = nuevoUsuario.encryptPassword(contrasegna);
        nuevoUsuario.rol = 0;
        await nuevoUsuario.save();
        done(null , nuevoUsuario);
    }
}));

passport.use('local-signin' , new localSatrategy({
    usernameField: 'nombreFamilia',
    passwordField: 'contrasegna',
    passReqToCallback: true
}, async (req , nombreFamilia , contrasegna , done) => {

    const usuarioIngresado = await Usuario.findOne({nombreFamilia: nombreFamilia});

    if(!usuarioIngresado){
        return done(null , false , req.flash('signinMessage' , 'No se ha encontrado el usuario'));
    }
    if(!usuarioIngresado.comparePassword(contrasegna)){
        return done(null , false , req.flash('signinMessage' , 'Contraseña incorrecta'));
    }
        done(null , usuarioIngresado);
}));