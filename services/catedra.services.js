const { Catedra } = require('../models/catedra.model');

//get all elements
const getCatedras = async() => {
    try {
        const catedras = await Catedra.find();
    } catch (error) {
        throw error;
    }
}
