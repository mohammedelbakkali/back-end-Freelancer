const express = require('express');
const router = express.Router();
const {
    addCategory,
    getOneCategory,
    getAllCategory
} = require('../controllers/category')

router.route('').post(addCategory).get(getAllCategory)
router.route('/:id').get(getOneCategory)

module.exports = router;