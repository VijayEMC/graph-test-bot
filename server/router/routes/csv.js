var express = require('express');
var router = express.Router();
var sr = require('../../models/srdata');

// GET /csv
router.get('/', function (req, res){
	res.send('This is the api endpoint at /');
});

// GET /csv/srreport/:gdun
router.get('/srreport/:gdun', function (req, res){
	console.log('the gdun requested is '+req.params.gdun);
	sr.getSRs(req.params.gdun,function(data){
		console.log(data.rows);
		res.csv(data.rows, req.params.gdun+"_sr_data.csv");
	});
});

module.exports = router;
