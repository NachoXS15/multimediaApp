const mongoose = require('mongoose');
const {Schema} = mongoose;

const catedraSchema = new Schema({
    nombre: String,
    Year: Number,
    Horario: String,
    Profesor: String,
    Modalidad: String,
    Duracion: String,
    Condicionales: String,
    Mail: String,
})

const Catedra = mongoose.model('Catedra', catedraSchema)

module.exports = Catedra;