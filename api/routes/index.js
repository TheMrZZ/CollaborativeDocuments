const express = require('express')
const fileController = require('../controllers/fileController')

const router = express.Router()

/* GET home page. */
router.get('/files/', fileController.root)
router.get('/files/*', fileController.byPath);

module.exports = router;
