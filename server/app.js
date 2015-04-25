var express = require('express');
var app = express();
var json2csv = require('nice-json2csv');

app.use(json2csv.expressDecorator);
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.listen(process.env.VCAP_APP_PORT || 80);

//============ROUTER=============
var router = require('./router')(app);

// Error Handling
app.use(function(err, req, res, next){
	res.status(err.status || 500);
});

module.exports = app;
