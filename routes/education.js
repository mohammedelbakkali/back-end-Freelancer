const express = require('express');
const {
    addData,getAll,update,deleteOne
} = require('../controllers/education');

const router = express.Router();


router.route('').post(addData).get(getAll)
router.route('/:id').delete(deleteOne).patch(update)


module.exports = router;