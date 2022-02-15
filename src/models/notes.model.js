const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    titulo: String,
    descripcion: String,
    parrafo: String,
    author: String
}, { versionKey: false })

const NotesModel = mongoose.model('notes', NotesSchema);

module.exports = NotesModel;