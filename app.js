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
   .send('Welcome to my api!');
});

app.listen(8000, function() {
 console.log('Listening on port 8000.');
});
