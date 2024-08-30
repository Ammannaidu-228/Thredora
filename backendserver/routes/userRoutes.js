const express = require('express');
const { fetchAllUsers, userSignup, userSignin, getUserProfile } = require('../controllers/userControllers');

const router = express.Router();


router.post('/signup', userSignup)
router.post('/signin', userSignin)
router.get('/profile', getUserProfile)
router.get('/all', fetchAllUsers)


module.exports = router;