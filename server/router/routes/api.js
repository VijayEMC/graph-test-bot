var express = require('express');
var router = express.Router();
var sr = require('../../models/srdata');
var ib = require('../../models/installdata');
var xio = require('../../models/xioconfig');

// GET /api
router.get('/', function (req, res){
	res.send('This is the api endpoint at /');
});

// GET /api/srs
router.get('/srs/:gdun', function (req, res){
	
	console.log('In the router function');
	var gdun = req.params.gdun;
        sr.getSRs(gdun,function(data){
		res.send(data);
	})
});

// GET /api/sev1s
router.get('/sev1s/:gdun', function (req, res){
	console.log('In the sev1 route');
	var gdun = req.params.gdun;
	sr.getSRs(gdun, function(data){
		sr.getSev1s(data, function (sev1s){
			res.send(sev1s);
			console.log('Number of S1s is: '+sev1s.length);
		});
	})
});

// GET /api/installs
router.get('/installs/:gdun', function (req, res){
	var gdun = req.params.gdun;
	ib.getInstalls(gdun, function(data){
		res.send(data);
	})
});

// GET /api/xtremio
router.get('/xtremio/:sn', function (req, res){
  console.log('Getting XtremIO data for '+req.params.sn);
	var sn = req.params.sn;
	xio.getXtremioPackages(sn, function(data){
		res.send(data);
		data = null;
	})
});

module.exports = router;
