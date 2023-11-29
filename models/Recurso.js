const mongoose = require('mongoose');

const RecursoSchema = mongoose.Schema({
    recurso: {
        type: String,
    },
    cantidad: {
        type: String,
    },
    marca: {
        type: String,
    },
    gama: {
        type: String,
    },
    estatus: {
        type: String,
        require: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fchDesdeFalla: {
        type: Date,
        default: Date.now()
    },
    descripcionFalla: {
        type: String,
        require: false
    },
    asignadoA: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Recurso', RecursoSchema);