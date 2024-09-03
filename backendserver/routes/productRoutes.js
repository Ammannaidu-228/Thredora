const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { getAllProductsController, findProductsById } = require('../controllers/productController');
const router = express.Router();

router.get('/', authenticate, getAllProductsController);
router.get('/:id', authenticate, findProductsById)

module.exports = router;