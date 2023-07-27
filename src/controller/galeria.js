const Galeria = require('../models/Galeria');

exports.mostrarGaleria = async (req , res) => {
    await Galeria.find({} , (err , galeria) => {
        if (err) throw err;
        res.render('galeria', {
            galeria: galeria
        });
    });
}

exports.eliminarFoto = async(req , res) => {
    let id = req.params.id;
    await Galeria.remove({_id : id} , (err , galeria) => {
        if (err) throw err;
        res.redirect('/galeria');
    });
}

exports.agregarFoto = async (req , res) => {
    const newFoto =  new Galeria(req.body);
    await newFoto.save();
    //console.log(newFoto);
    res.redirect('/galeria');
}