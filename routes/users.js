var express = require('express');
var {getOneUser, update , getUser , getAllUser} = require('../controllers/user');
var {getUserById} = require('../middlewares/user');
const {requireSignIn , isAuth }=require('../middlewares/auth');
const user = require ('../models/user')

var router = express.Router();


router.route('/getuser/:id').get(getUser)
router.route('/allusers').get(getAllUser)
router.route('/profile/:id').get(requireSignIn,isAuth,getOneUser)
                            .patch (requireSignIn,isAuth,update)
router.param('id',getUserById);


  

module.exports = router;
