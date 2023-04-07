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

const getCatedrasByID = async() => {
    try {
        const catedras = await Catedra.findById(id);
        return catedras;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getCatedras,
    getCatedrasByID
}