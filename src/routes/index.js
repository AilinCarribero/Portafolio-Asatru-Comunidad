const {Router} = require('express');
const router =  Router();

const CantNodewars = require('../models/CantNodewars');
const { tablaPuntos, agregarMiembro, sumarPuntoCaza, sumarPuntoExtra, sumarPuntoNode, sumarPuntoCantNode, sumarPuntoTyP, sumarPuntoSobrantes, sumarPuntoCanje, restarPuntoCaza, restarPuntoExtra, restarPuntoNode, restarPuntoCantNode, restarPuntoTyP, restarPuntoSobrantes, restarPuntoCanje, resetPuntos, eliminarMiembro } = require('../controller/miembro');
const { signup, signin, logout, cuentasRegistradas, eliminarCuenta, masRol, menosRol } = require('../controller/auth');
const { mostrarGaleria, eliminarFoto, agregarFoto } = require('../controller/galeria');
const { datosMaterialesElefante, agregarMaterialElefante, sumarMaterial, restarMaterial, eliminarMaterial } = require('../controller/material');
const { dataMaterialesMiembros, agregarMaterialMiembro, eliminarMaterialMiembro } = require('../controller/materialMiembro');

//Inicio - Ruta inicial
router.get('/', (req , res) => {
    res.render('index');
});

//Mostar miembros
router.get('/tablaPuntos', authenticated , tablaPuntos);

//Agregar miembros
router.post('/agregarMiembro', authenticated, agregarMiembro);

//Sumar un punto
router.get('/sumarCaza/:id', authenticated, sumarPuntoCaza);

router.get('/sumarExtras/:id', authenticated, sumarPuntoExtra);

router.get('/sumarNode/:id', authenticated, sumarPuntoNode);

router.get('/sumarCant/:id', authenticated, sumarPuntoCantNode);

router.get('/sumarTyP/:id', authenticated, sumarPuntoTyP);

router.get('/sumarSobrantes/:id',authenticated, sumarPuntoSobrantes);

router.get('/sumarCanje/:id', authenticated, sumarPuntoCanje);

//Restar un punto
router.get('/restarCaza/:id',authenticated, restarPuntoCaza);

router.get('/restarExtras/:id',authenticated, restarPuntoExtra);

router.get('/restarNode/:id',authenticated, restarPuntoNode);

router.get('/restarCant/:id',authenticated, restarPuntoCantNode);

router.get('/restarTyP/:id',authenticated, restarPuntoTyP);

router.get('/restarSobrantes/:id',authenticated, restarPuntoSobrantes);

router.get('/restarCanje/:id',authenticated, restarPuntoCanje);

//Resetear los valores de la tabla al valor Cero
router.get('/volverCero/:id' , authenticated, resetPuntos);

//Borrar miembro
router.get('/delete/:id', eliminarMiembro);

//Registrar cuenta
router.post('/signup', signup);

//Ingresar a una cuenta
router.post('/signin' , signin);

//Salir de la cuenta
router.get('/logout', logout);

//Galeria de fotos
router.get('/galeria', mostrarGaleria);

//Borrar foto de la galeria
router.get('/deleteImg/:id', authenticated, eliminarFoto);

//Agregar foto a la galeria
router.post('/agregarGaleria', authenticated, agregarFoto);

//gestion de cuentas
router.get('/gestionCuentas', authenticated , cuentasRegistradas);

router.get('/deleteCuenta/:id', authenticated, eliminarCuenta);

router.get('/subirRol/:id', authenticated, masRol);

router.get('/bajarRol/:id', authenticated, menosRol);

/*Materiales que faltan - Mostar tabla de materiales faltantes*/
router.get('/tablaElefante', authenticated , datosMaterialesElefante);

//Agregar los materiales
router.post('/agregarMaterial', authenticated , agregarMaterialElefante);

router.get('/sumarMaterial/:id', authenticated, sumarMaterial);

router.get('/restarMaterial/:id', authenticated, restarMaterial);

router.get('/deleteMaterial/:id', authenticated, eliminarMaterial);

//Mostar materiales por miembro
router.get('/tablaMMiembros', authenticated , dataMaterialesMiembros);

//Agregar los materiales de los miembros
router.post('/agregarMElefante', authenticated , agregarMaterialMiembro);

router.get('/deleteMMaterial/:id',authenticated, eliminarMaterialMiembro);


/*----------------------------------Enrutamiento----------------------------------------- */
//Tabla de puntos
router.get('/tablaPuntos' , authenticated , (req , res) => {
    res.render('tablaPuntos');
});

//Seccion agregarMiembro
router.get('/agregarMiembro' , authenticated, (req , res) => {
    res.render('agregarMiembro');
});

//Registro
router.get('/signup' , (req , res ) => {
    res.render('signup');
});

//Login
router.get('/signin' , (req , res) => {
    res.render('signin');
});

//Galeria
router.get('/galeria' , (req , res) => {
    res.render('galeria');
});

//Seccion agregarGaleria
router.get('/agregarGaleria' , authenticated, (req , res) => {
    res.render('agregarGaleria');
});

//Cuentas registradas
router.get('/gestionCuentas' , authenticated, (req , res) => {
    res.render('gestionCuentas');
});

//Tabla elefante
router.get('/tablaElefante' , authenticated , (req , res) => {
    res.render('tablaElefante');
});

//Form materiales
router.get('/agregarMaterial' , authenticated , (req , res) => {
    res.render('agregarMaterial');
});

//Tabla de materiales para elefante de cada miembro
router.get('/tablaMMiembros' , authenticated , (req , res) => {
    res.render('tablaMMiembros');
});

//Seccion agregar materiales para el elefante por miembro
router.get('/agregarMElefante' , authenticated , (req , res) => {
    res.render('agregarMElefante');
});


//Gestion de la cantidad de nodewars realizadas
/*router.get('/sumarCantNodewars/:id', (req , res) => {
    let id = req.params.id;
    CantNodewars.findById(id, (err , cantNodewars) => {
        if (err) throw err;
        cantNodewars.cant += 1 ;
        cantNodewars.puntos = 9 / cantNodewars.cant;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))
    });
});
router.get('/restarCantNodewars/:id', (req , res) => {
    let id = req.params.id;
    CantNodewars.findById(id, (err , cantNodewars) => {
        if (err) throw err;
        cantNodewars.cant -= 1 ;
        cantNodewars.puntos = 9 / cantNodewars.cant;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))
    });
});*/


/*//Buscar miembro
router.get("/buscarMiembro/:nombre" , (req , res) => {
    let nombre = req.params.nombre;
    console.log(nombre);
    Miembro.findById(nombre, (err , miembros) => {
        if (err) throw err;
        res.redirect('/buscador');
    });
});*/

//Autentificar
function authenticated(req , res , next){   
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin');
};

module.exports = router;

