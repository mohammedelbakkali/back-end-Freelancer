var express = require('express');
var {getOneUser} = require('../controllers/user');
var {getUserById} = require('../middlewares/user');
const {requireSignIn , isAuth }=require('../middlewares/auth');

var router = express.Router();



router.route('/profile/:id').get(requireSignIn,isAuth,getOneUser);
router.param('id',getUserById);


module.exports = router;
