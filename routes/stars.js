const express = require('express');
const {
    addData,getAll
} = require('../controllers/stars');
const router = express.Router();


router.route('').post(addData).get(getAll)


module.exports = router;