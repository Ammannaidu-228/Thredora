const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { getAllOrders, confirmOrder, deleteOrder, shipOrder, deliverOrder, cancelOrder } = require('../controllers/adminOrderController');
const router = express.Router();

router.get('/', authenticate, getAllOrders);
router.put('/:orderId/confirmed', authenticate, confirmOrder)
router.put('/:orderId/shipped', authenticate, shipOrder)
router.put('/:orderId/delivered', authenticate, deliverOrder)
router.put('/:orderId/cancelled', authenticate, cancelOrder)
router.put('/:orderId/deleted', authenticate, deleteOrder)

module.exports = router;


