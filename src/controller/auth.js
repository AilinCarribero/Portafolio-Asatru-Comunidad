const passport = require('passport');
const Cuentas = require('../models/Usuarios');

exports.signup = passport.authenticate('local-signup' , {
    successRedirect: 'tablaPuntos',
    failureRedirect: 'signup',
    passReqToCallback: true 
})

exports.signin = passport.authenticate('local-signin' , {
    successRedirect: '/',
    failureRedirect: 'signin',
    passReqToCallback: true 
})

exports.logout = (req , res) => {
    req.logout();
    res.redirect('/');
}

exports.cuentasRegistradas = async (req , res) => {
    await Cuentas.find({} , (err , cuentas) => {
        if (err) throw err;
        res.render('gestionCuentas', {
            cuentas: cuentas
        });
        //console.log(cuentas);
    });
}

exports.eliminarCuenta = async(req , res) => {
    let id = req.params.id;
    await Cuentas.remove({_id : id} , (err , cuentas) => {
        if (err) throw err;
        res.redirect('/gestionCuentas');
    });
}

exports.masRol = (req , res) => {
    let id = req.params.id;
    Cuentas.findById(id, (err , cuentas) => {
        if (err) throw err;
        cuentas.rol += 1 ;
        cuentas.save()
            .then(() => res.redirect('/gestionCuentas'))

    });
}

exports.menosRol = (req , res) => {
    let id = req.params.id;
    Cuentas.findById(id, (err , cuentas) => {
        if (err) throw err;
        cuentas.rol -= 1 ;
        cuentas.save()
            .then(() => res.redirect('/gestionCuentas'))

    });
}