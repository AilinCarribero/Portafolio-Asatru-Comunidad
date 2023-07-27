const Miembro = require("../models/Miembro");

exports.tablaPuntos = async (req , res) => {
    await Miembro.find({} , (err , miembros) => {
        if (err) throw err;
        res.render('tablaPuntos', {
            miembros: miembros
        });
    });
};

exports.agregarMiembro = async (req , res) => {
    const newMiembro =  new Miembro(req.body);
    await newMiembro.save();
    console.log(newMiembro);
    res.redirect('/tablaPuntos');
};

exports.sumarPuntoCaza = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.caza += 500000 ;
        miembros.puntosCaza = miembros.caza / 20000000;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))
    });
    
}

exports.sumarPuntoExtra = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.extras += 0.5 ;
        miembros.puntosExtras = miembros.extras * 1 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.sumarPuntoNode = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.node += 0.5 ;
        miembros.puntosNode = miembros.node * 3;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.sumarPuntoCantNode = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.cantNodewars += 1 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.sumarPuntoTyP = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.TyP += 0.5 ;
        miembros.puntosTyP = miembros.TyP / miembros.cantNodewars ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.sumarPuntoSobrantes = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.puntosSobrantes += 0.5 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.sumarPuntoCanje = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.canje += 1 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.restarPuntoCaza = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.caza -= 100000 ;
        miembros.puntosCaza = miembros.caza / 20000000;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.restarPuntoExtra = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.extras -= 0.5 ;
        miembros.puntosExtras = miembros.extras * 1 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.restarPuntoNode = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.node -= 0.5 ;
        miembros.puntosNode = miembros.node * 3;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.restarPuntoCantNode = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.cantNodewars -= 0.5 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))
    });
}

exports.restarPuntoTyP = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.TyP -= 0.5 ;
        miembros.puntosTyP = miembros.TyP / miembros.cantNodewars ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.restarPuntoSobrantes = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.puntosSobrantes -= 0.5 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.restarPuntoCanje = (req , res) => {
    let id = req.params.id;
    Miembro.findById(id, (err , miembros) => {
        if (err) throw err;
        miembros.canje -= 1 ;
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))

    });
}

exports.resetPuntos = (req , res) => {
    let id = req.params.id;
    Miembro.findById( id , (err , miembros) => {
        if (err) throw err;
        miembros.caza = 0 ;
        miembros.puntosCaza = 0 ;
        miembros.extras = 0 ; 
        miembros.puntosExtras = 0 ; 
        miembros.node = 0 ; 
        miembros.puntosNode = 0 ; 
        miembros.cantNodewars = 0 ; 
        miembros.TyP = 0 ; 
        miembros.puntosTyP = 0 ; 
        miembros.canje = 0 ; 
        miembros.state = 0 ; 
        miembros.save()
            .then(() => res.redirect('/tablaPuntos'))
    });
}

exports.eliminarMiembro = async(req , res) => {
    let id = req.params.id;
    await Miembro.remove({_id : id} , (err , miembros) => {
        if (err) throw err;
        res.redirect('/tablaPuntos');
    });
}