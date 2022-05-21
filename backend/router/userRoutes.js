const express = require('express');
const { registerUser, authUser, updateProfile } = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').put(protect,updateProfile);

module.exports = router;