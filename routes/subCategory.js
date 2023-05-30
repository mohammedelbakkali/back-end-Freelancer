const express = require('express');
const router = express.Router();
const {
    addSubCategory,getOneSubCategory,getAllSubCategory,update
} = require('../controllers/sebCategory')

router.route('').post(addSubCategory).get(getAllSubCategory)
router.route('/:id').get(getOneSubCategory).patch(update)

module.exports = router;