var express = require('express');
var app = express();
var json2csv = require('nice-json2csv');

app.use(json2csv.expressDecorator);

app.listen(1337, function(){

console.log('Running');

})


//============ROUTER=============
var router = require('./router')(app);

// Error Handling
app.use(function(err, req, res, next){
	res.status(err.status || 500);
});

module.exports = app;
