var reps = require('./lib/reps');
var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.set('view cache', false);


app.get('/', function(req, res, next){
  var method;

  switch (req.query.type) {
    case 'zip': method = reps.allByZip; break;
    case 'name': method = reps.repsByName; break;
    case 'state': method = reps.repsByState; break;
    default: method = function(param, cb) { cb(null, []); }; break;
  }

  if (method) {
    method(req.query.search, function(err, people){
      if (err) { return next(err); }
      res.render('index', {
        reps: people,
        query: req.query,
      });
    });
  }
  // res.render('index', {
  //   foo: 'bar',
  //   arr: [1,4,7,3,9]
  // });
});


function makeRoute(route, method, param) {
  app.get(route, function(req, res, next) {
    method(req.params[param], function(err, people) {
      if (err) { return next(err); }
      res.json(people);
    });
  });
}

app.listen(8000, function(){
  console.log('Listening on port 8000');
});

makeRoute('/all/by-zip/:zip', reps.allByZip, 'zip');
makeRoute('/reps/by-name/:name', reps.repsByName, 'name');
makeRoute('/reps/by-state/:state', reps.repsByState, 'state');
makeRoute('/sens/by-name/:name', reps.sensByName, 'name');
makeRoute('/sens/by-state/:state', reps.sensByState, 'state');

module.exports = app;
