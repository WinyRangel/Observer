const Recurso = require("../models/recurso.js");

exports.crearRecurso = async (req, res) => {
    try {
        let vrecurso;

        // Creamos nuestro rol
        vrecurso = new Recurso(req.body);

        await vrecurso.save();
        res.send(vrecurso);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRecursos = async (req, res) => {

    try {
        const vrecurso = await Recurso.find();
        res.json(vrecurso)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarRecurso = async (req, res) => {

    try {
        const { numSerie, recurso, marca, modelo, estatus } = req.body;
        let vrecurso = await Recurso.findById(req.params.id);

        if(!vrecurso) {
            res.status(404).json({ msg: 'No existe' })
        }

        vrecurso.numSerie = numSerie;
        vrecurso.recurso = recurso;
        vrecurso.marca = marca;
        vrecurso.modelo = modelo;
        vrecurso.estatus = estatus;
        
        vrecurso = await Recurso.findOneAndUpdate({ _id: req.params.id },vrecurso, { new: true} )
        res.json(vrecurso);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRecursoID = async (req,res) => {

    try {
        let vrecurso = await Recurso.findById(req.params.id);

        if(!vrecurso){
            res.status(404).json({msg: 'Recurso inexistente'})
        }
        
        res.json(vrecurso);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRecurso = async (req,res) => {

    try {
        let vrecurso = await Recurso.findById(req.params.id);

        if(!vrecurso){
            res.status(404).json({msg: 'Recurso inexistente'})
        }
        
        await Recurso.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Recurso eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Asignar recursos 
exports.getRecursoFiltro = async (req, res) => {
    console.info('getRecursoFiltro')
    try {
        const filtros = req.body;
        console.info(filtros)
        let mapFiltros = {};
        if(filtros.numSerie) {
            mapFiltros.numSerie = { $regex: filtros.numSerie }
        }
        if(filtros.recurso) {
            mapFiltros.recurso = { $regex: filtros.recurso }
        }
        if(filtros.marca) {
            mapFiltros.marca = { $regex: filtros.marca }
        }
        if(filtros.modelo) {
            mapFiltros.modelo = { $regex: filtros.modelo }
        }
        mapFiltros.estatus = "Sin Problemas";
        const retorno = await Recurso.find(mapFiltros);
        console.info(retorno)
        res.send(retorno)
    } catch(error) {
        console.error(error);
        res.status(500).send({mensaje: 'Hubo un error'})
    }

}

exports.asignarRecurso = async (req, res) => {
    console.info('asignarRecurso')
    try{
        const requestBody = req.body;
        console.info(requestBody)
        requestBody.recursos.forEach(async f => {
            const recurso = await Recurso.findOne({ _id: {$eq: f._id}});
            recurso.asignadoA = requestBody.empleado._id;
            console.info(recurso);
            await Recurso.findOneAndUpdate({ _id: recurso._id}, recurso, {new: true});
        })
        res.send({mensaje: 'Actualizado correctamente'});
    } catch(error) {
        console.error(error);
        res.status(500).send({mensaje: 'Hubo un error'})
    }
}

exports.getRecursoPorEmpleado = async (req, res) => {
    console.info('getRecursoPorEmpleado')
    try {
        const retorno = await Recurso.find({estatus: "Sin Problemas"});
        console.info(retorno)
        res.send(retorno)
    } catch(error) {
        console.error(error);
        res.status(500).send({mensaje: 'Hubo un error'})
    }

}

exports.asignarEmpleado = async (req, res) => {
    console.info('asignarEmpleado')
    try{
        const requestBody = req.body;
        console.info(requestBody)
        requestBody.forEach(async f => {
            const recurso = await Recurso.findOne({ _id: {$eq: f._id}});
            recurso.asignadoA = f.asignadoA;
            console.info(recurso);
            await Recurso.findOneAndUpdate({ _id: recurso._id}, recurso, {new: false});
        })
        res.send({mensaje: 'Actualizado correctamente'});
    } catch(error) {
        console.error(error);
        res.status(500).send({mensaje: 'Hubo un error'})
    }
}

exports.reportarFallas = async (req, res) => {
    console.info('reportarFallas')
    try{
        const requestBody = req.body;
        console.info(requestBody)
        let vrecurso = await Recurso.findOne({ numSerie: {$eq: requestBody.numSerie}});

        if(!vrecurso) {
            res.status(404).json({ msg: 'No existe' })
        }

        vrecurso.asignadoA = null;
        vrecurso.descripcionFalla = requestBody.descripcion;
        vrecurso.fchDesdeFalla = requestBody.fchDesde;
        vrecurso.estatus = "Con Problemas";
        
        vrecurso = await Recurso.findOneAndUpdate({ _id: vrecurso._id },vrecurso, { new: true} )
        res.send({mensaje: 'Actualizado correctamente'});
    } catch(error) {
        console.error(error);
        res.status(500).send({mensaje: 'Hubo un error'})
    }
}
