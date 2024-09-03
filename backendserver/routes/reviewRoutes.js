const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { createReviews, getAllReviews } = require('../controllers/reviewController');
const router = express.Router();

router.post('/', authenticate, createReviews);
router.get('/product/:productId', authenticate, getAllReviews)

module.exports = router;