const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { getAllProductsController, findProductsById } = require('../controllers/productController');
const router = express.Router();

router.get('/', authenticate, getAllProductsController);
router.get('/:productId', authenticate, findProductsById)

module.exports = router;