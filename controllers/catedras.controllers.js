const axios = require('axios').default;
const config = require('config');

const catedraService = require('../services/catedra.services');

async function getCatedrasController(req, res, next){
    try {
        const catedras = await catedraService.getCatedras();
        res.json(catedras)
    } catch (error) {
        next(error);
    }
}

async function getCatedrasIdController(req, res, next){
    try {
        const catedras = await catedraService.getCatedrasByID();
        res.json(catedras);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getCatedrasController,
    getCatedrasIdController
}