const express = require('express');
const router = express.Router();
const {
    addRoom,getOneRoom,getAllRoom
} = require('../controllers/room')

router.route('').post(addRoom).get(getAllRoom)
router.route('/:id').get(getOneRoom)

module.exports = router;