var express = require('express');
var router = express.Router();
var sr = require('../../models/srdata');

// GET /api
router.get('/', function (req, res){
	res.send('This is the api endpoint at /');
});

// GET /api/srs
router.get('/srs', function (req, res){
	
	console.log('In the router function');
	var gdun = "081466849";
        sr.getSRs(gdun,function(data){
		res.send(data);
	})
});

module.exports = router;
