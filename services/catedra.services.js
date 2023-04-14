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

module.exports = {
    getCatedras,
    getCatedrasByID,
    postCatedras
}