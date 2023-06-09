const { Catedra } = require('../models/catedra.model');

//get all elements
const getCatedras = async() => {
    try {
        const catedras = await Catedra.find();
        return catedras;
    } catch (error) {
        throw error;
    }
}

//get element by id
const getCatedrasByID = async() => {
    try {
        const catedras = await Catedra.findById(id);
        return catedras;
    } catch (error) {
        throw error;
    }
}

//create an element
const postCatedras = async(data) => {
    try {
        const catedra = new Catedra(data);
        await catedra.save();
        return {
            operation: "ok"
        }
    } catch (error) {
        throw error
    }
}

const updateCatedras = async(id, data) => {
    try {
        const { nombre, Year, Horario, Profesor, Modalidad, Duracion, Condicionales, Mail } = data;
        const catedra = await Catedra.findById(id);
        catedra.nombre = nombre;
        catedra.Year = Year;
        catedra.Horario = Horario;
        catedra.Profesor = Profesor;
        catedra.Modalidad = Modalidad;
        catedra.Duracion = Duracion;
        catedra.Condicionales = Condicionales;
        catedra.Mail = Mail;
        await catedra.save();
        return{
            operation: 'ok'
        }
    } catch (error) {
        throw error
    }
  

}

//delete an element
async function deleteCatedra(id){
    try {
        const catedra = await Catedra.findById(id);
        await catedra.deleteOne();
        return {
            operation: 'ok'
        }
    } catch (error) {
        throw error;
    }
}  

module.exports = {
    getCatedras,
    getCatedrasByID,
    postCatedras,
    updateCatedras,
    deleteCatedra
}