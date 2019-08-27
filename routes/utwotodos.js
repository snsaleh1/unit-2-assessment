var express = require('express');
var router = express.Router();
const utwotodosCtrl = require('../controllers/utwotodos');

router.get('/', utwotodosCtrl.index);
router.post('/', utwotodosCtrl.create);


module.exports = router;
