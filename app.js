var reps = require('./lib/reps');
var express = require('express');
var app = express();

function makeRoute(route, method, param) {
  app.get(route, function(req, res, next) {
    method(req.params[param], function(err, people) {
      if (err) { return next(err); }
      res.json(people);
    });
  });
}

makeRoute('/all/by-zip/:zip', reps.allByZip, 'zip');
makeRoute('/reps/by-name/:name', reps.repsByName, 'name');
makeRoute('/reps/by-state/:state', reps.repsByState, 'state');
makeRoute('/sens/by-name/:name', reps.sensByName, 'name');
makeRoute('/sens/by-state/:state', reps.sensByState, 'state');

module.exports = app;
