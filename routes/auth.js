const express = require('express');
const {signUp , sigIn , signout} = require('../controllers/auth');
const router = express.Router();

router.route('/signout').get(signout)
router.route('/logup').post(signUp);
router.route('/login').post(sigIn);




module.exports = router;
