const express = require('express');
const router = express.Router();
const {
    addSubCategory,getOneSubCategory,getAllSubCategory
} = require('../controllers/sebCategory')

router.route('').post(addSubCategory).get(getAllSubCategory)
router.route(':id').get(getOneSubCategory)

module.exports = router;