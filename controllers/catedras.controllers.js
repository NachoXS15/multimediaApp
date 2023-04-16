const axios = require('axios').default;
const config = require('config');

const catedraService = require('../services/catedra.services');

async function getCatedrasController(req, res, next){
    try {
        const catedra = await catedraService.getCatedras();
        res.json(catedra)
    } catch (error) {
        next(error);
    }
}

async function getCatedrasIdController(req, res, next){
    try {
        const { id } = req.params;
        const catedra = await catedraService.getCatedrasByID(id);
        res.json(catedra);
    } catch (error) {
        next(error);
    }
}

async function postCatedrasController(req, res, next){
    const data = req.body;
    try {
        const catedra = await catedraService.postCatedras(data);
        res.json(catedra);
    } catch (error) {
        next(error);
    }
}

async function deleteCatedrasController(){
    const {id} = req.params;
    try {
        const catedra = await catedraService.deleteElement(id)
        res.json(catedra);
    } catch (error) {
        throw error
    }
}

module.exports = {
    getCatedrasController,
    getCatedrasIdController,
    postCatedrasController,
    deleteCatedrasController
}