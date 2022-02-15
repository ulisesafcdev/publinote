const controller = {};
const conn = require('../connection/connection');
const NotesModel = require('../models/notes.model');

controller.index = async (req, res) => {
    
    try {

        await conn();

        const historialNotes = await NotesModel.find();

        res.render('index', {
            historialNotes
        });
        
    } catch (error) {
        console.log(error);
    }

}

controller.articulos = async (req, res) => {

    try {

        await conn();

        const allArticulos = await NotesModel.find();

        res.render('allarticulos', {
            allArticulos
        })
        
    } catch (error) {
        console.log(error);
    }

}

controller.nuevo = (req, res) => {

    res.render('nueva-nota');

}

controller.guardar = async (req, res) => {

    try {

        const body = req.body;

        const guardarNota = new NotesModel(body);
        await guardarNota.save();

        res.redirect('/');
        
    } catch (error) {
        console.log(error);
    }

}

controller.detalle = async (req, res) => {

    try {

        const id = req.params.id;
        const detalleNota = await NotesModel.findById({_id:id});

        res.render('detalle', {
            detalleNota
        })
        
    } catch (error) {
        console.log(error);
    }

}

controller.editar = async (req, res) => {

    try {

        const id = req.params.id;
        const editarNota = await NotesModel.findById({_id:id});
        
        res.render('editar', {
            editarNota
        });

    } catch (error) {
        console.log(error);
    }


}

controller.eliminar = async (req, res) => {

    try {

        const id = req.params.id;
        const eliminarNota = await NotesModel.findByIdAndDelete({_id:id});

        if (eliminarNota) {
            res.json({
                estado: true,
                mensaje: 'borrado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo eliminar'
            })
        }
        
    } catch (error) {
        console.log(error);
    }

}

controller.editForm = async (req, res) => {
    
    try {
        
        const id = req.params.id;
        const body = req.body;

        const editarNota = await NotesModel.findByIdAndUpdate(id, body, { useFindAndModify: false});

        res.json({
            estado: true,
            mensaje: 'editado'
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            estado: false,
            mensaje: 'fallo editar'
        })

        // console.log(error);
    }

}

module.exports = controller;