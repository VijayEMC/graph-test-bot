var express = require('express');
var json2csv = require('nice-json2csv');
var app = express();
var httpntlm = require('httpntlm');


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
