const express = require('express');
const {
    addData,
    getOneById,
    getAll,
    update,
    deleteOne
 } = require('../controllers/post');
 const {uploadSingleFile} = require('../helpers/uploadFiles');
const router = express.Router();

router.route('/').post(uploadSingleFile("pulic/product","photo"),addData).get(getAll);
router.route('/:id').get(getOneById).patch(update).delete(deleteOne);

module.exports = router;