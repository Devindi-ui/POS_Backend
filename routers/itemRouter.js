const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

router.post('/create', itemController.createItem);
router.get('/all', itemController.getAllItems);
router.get('/find/:name', itemController.getItemByName);

module.exports = router;