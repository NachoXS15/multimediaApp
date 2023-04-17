const express = require('express');
const router = express.Router();
const { getCatedrasController,
        getCatedrasIdController,
        postCatedrasController,
         updateCatedrasController,
        deleteCatedrasController} = require('../controllers/catedras.controllers')

router.get('/', getCatedrasController);
router.get('/:id', getCatedrasIdController);
router.post('/', postCatedrasController);
router.patch('/:id', updateCatedrasController)
router.delete('/:id', deleteCatedrasController);


module.exports = router;