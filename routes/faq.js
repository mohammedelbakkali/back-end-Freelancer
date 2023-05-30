const express = require('express');

const {
    addFaq,
    getFaq,
    updateFaq
} = require('../controllers/faq');

const router = express.Router();


router.route('')
      .post(addFaq)
     



module.exports = router;