var express = require('express');
var router = express.Router();

// GET /csv
router.get('/', function (req, res){
	res.send('This is the api endpoint at /');
});

// GET /csv/gdun
router.get('/gdun', function (req, res){
	res.send('This is the pai endpoint at /csv/gdun');
});

module.exports = router;
