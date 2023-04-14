const express = require('express');
const router = express.Router();
const { getCatedrasController,
        getCatedrasIdController,
        postCatedrasController } = require('../controllers/catedras.controllers')

router.get('/', getCatedrasController);
router.get('/:id', getCatedrasIdController);
router.post('/', postCatedrasController);


module.exports = router;