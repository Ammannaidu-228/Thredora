
const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { createOrders, OrdersHistory, findOrdersById } = require('../controllers/orderController');
const { getAllOrders } = require('../controllers/adminOrderController');
const router = express.Router();

router.post('/', authenticate, createOrders);
router.get('/user', authenticate, OrdersHistory);
router.get('/:id', authenticate, findOrdersById)



module.exports = router;