const Material = require('../models/Material');

exports.datosMaterialesElefante = async (req , res) => {
    await Material.find({} , (err , material) => {
        if (err) throw err;
        res.render('tablaElefante', {
            material: material
        });
    });
}

exports.agregarMaterialElefante = async (req , res) => {
    const newMaterial =  new Material(req.body);
    await newMaterial.save();
    console.log(newMaterial);
    res.redirect('/tablaElefante');
}

exports.sumarMaterial = (req , res) => {
    let id = req.params.id;
    Material.findById(id, (err , materiales) => {
        if (err) throw err;
        materiales.cantidad += 10 ;
        materiales.faltan += 10 ;
        materiales.save()
            .then(() => res.redirect('/tablaElefante'))
    });
}

exports.restarMaterial = (req , res) => {
    let id = req.params.id;
    Material.findById(id, (err , materiales) => {
        if (err) throw err;
        materiales.cantidad -= 10 ;
        materiales.faltan -= 10 ;
        materiales.save()
            .then(() => res.redirect('/tablaElefante'))
    });
}

exports.eliminarMaterial = async(req , res) => {
    let id = req.params.id;
    await Material.remove({_id : id} , (err , material) => {
        if (err) throw err;
        res.redirect('/tablaElefante');
    });
}
