var express = require('express');
var router = express.Router();
var sr = require('../../models/srdata');
var ib = require('../../models/installdata');

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

// GET /api/installs
router.get('/installs', function (req, res){
	var gdun = "081466849";
	ib.getInstalls(gdun, function(data){
		res.send(data);
	})
});

module.exports = router;
