const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { updateCartsItems, removeCartsItems } = require('../controllers/cartItemController');
const router = express.Router();

router.put('/:id', authenticate, updateCartsItems);
router.delete('/:id', authenticate, removeCartsItems);


module.exports = router;