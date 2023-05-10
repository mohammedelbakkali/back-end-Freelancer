var express = require('express');
var router = express.Router();
var {
    addPack,
    getPackById,
    updatePack,
    getAllPack
} = require('../controllers/pack');


router.route('').post(addPack).get(getAllPack);
router.route('/:id').get(getPackById).patch(updatePack);


module.exports = router;