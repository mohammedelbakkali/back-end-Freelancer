const express = require('express');
const {
    addData,getAllData,deleteOne
} = require('../controllers/wishlist');

const router = express.Router();


router.route('').post(addData).get(addData,getAllData)
router.route('/:id').delete(deleteOne)


module.exports = router;