const express = require('express');

const {
    addfriends,getAllfriends
} = require('../controllers/friends');

const router = express.Router();


router.route('').post(addfriends).get(getAllfriends)



module.exports = router;