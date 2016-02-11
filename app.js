var express = require('express');
var reps = require('../lib/reps');

var app = express();

reps.allByZip('84043', function(err, results) {
 results.forEach(function(key) {
   console.log(key.name);
 });
});

app.get('/', function(req, res) {
 res
   .status(200)
   .send('This Api is Working!');
});

app.get('/all/by-zip/:zip', function(req,res,next){
  resp.allByZip(req.params.zip);
});

app.get('/reps/by-name/:name', function(req,res,next){

});

app.get('/reps/by-state/:state', function(req,res,next){

});

app.get('/sens/by-name/:name', function(req,res,next){

});

app.get('/sens/by-state/:state', function(req,res,next){

});



app.listen(8000, function() {
 console.log('Listening on port 8000.');
});
