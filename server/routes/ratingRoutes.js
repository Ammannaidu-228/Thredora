const express = require('express');
const { authenticate } = require('../middlewares/authentication');
const { createRatings, getAllRatings } = require('../controllers/ratingController');
const router = express.Router();

router.post('/', authenticate, createRatings)
router.put('/product/:productId', authenticate, getAllRatings)


module.exports = router;