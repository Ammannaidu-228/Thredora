const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { createProducts, createMultipleproductsController, deleteProducts, updateProducts } = require('../controllers/productController');
const router = express.Router();

router.post('/', authenticate, createProducts);
router.post('/many', authenticate, createMultipleproductsController);
router.delete('/:id', authenticate, deleteProducts)
router.put('/:id', authenticate, updateProducts)


module.exports = router;