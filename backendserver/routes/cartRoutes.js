const { addItemsToCarts, findUsersCarts } = require('../controllers/cartController')
const { authenticate } = require('../middlewares/authentication');

const express = require('express')
const router = express.Router();


router.get('/', authenticate, findUsersCarts)
router.put('/add', authenticate, addItemsToCarts)

module.exports = router;