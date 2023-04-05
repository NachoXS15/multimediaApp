const express = require('express');
const router = express.Router();

router.get('/', getCatedrasController);
router.get('/:id', getCatedrasIdController);