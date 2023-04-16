const express = require('express');
const router = express.Router();
const { getCatedrasController,
        getCatedrasIdController,
        postCatedrasController, 
        deleteCatedrasController} = require('../controllers/catedras.controllers')

router.get('/', getCatedrasController);
router.get('/:id', getCatedrasIdController);
router.post('/', postCatedrasController);
router.delete('/', deleteCatedrasController);


module.exports = router;