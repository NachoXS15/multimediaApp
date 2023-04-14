const express = require('express');
const router = express.Router();
const { getCatedrasController,
        getCatedrasIdController } = require('../controllers/catedras.controllers')

router.get('/', getCatedrasController);
router.get('/:id', getCatedrasIdController);


module.exports = router;