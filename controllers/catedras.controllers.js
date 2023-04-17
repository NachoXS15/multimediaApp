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

async function updateCatedrasController(req, res, next){
    try {
        const { id } = req.params
        const data = req.body;
        const catedra = await catedraService.updateCatedras(id, data)
        res.json(catedra);
    } catch (error) {
        next(error);
    }
}

async function deleteCatedrasController(req, res, next){
    try {
        const {id} = req.params;
        const data = req.body;
        const catedra = await catedraService.deleteCatedra(id, data)
        res.json(catedra);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getCatedrasController,
    getCatedrasIdController,
    postCatedrasController,
    updateCatedrasController,
    deleteCatedrasController
}