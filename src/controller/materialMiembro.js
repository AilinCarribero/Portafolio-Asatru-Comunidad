const MaterialMiembro = require('../models/MaterialMiembro');
const Material = require('../models/Material');

exports.dataMaterialesMiembros = async (req , res) => {
    await MaterialMiembro.find({} , (err , materialMiembro) => {
        if (err) throw err;
        res.render('tablaMMiembros', {
            materialMiembro: materialMiembro 
        });
    });
}

exports.agregarMaterialMiembro = async (req , res) => {
    const newMaterialMiembro =  new MaterialMiembro(req.body);
    modificarMaterial(newMaterialMiembro.material , newMaterialMiembro.cantMaterial);
    await newMaterialMiembro.save();
    console.log(newMaterialMiembro);
    res.redirect('/tablaMMiembros');
}

exports.eliminarMaterialMiembro = async(req , res) => {
    let id = req.params.id;
    await MaterialMiembro.remove({_id : id} , (err , mMaterial) => {
        if (err) throw err;
        res.redirect('/tablaMMiembros');
    });
}


function modificarMaterial(materialResiv , cantidadResiv , res) { 
    Material.findOne( {material: materialResiv} , (err , materiales) => { 
        if (err) throw err;
        materiales.faltan = materiales.faltan - cantidadResiv ;
        materiales.save();
    });
}
