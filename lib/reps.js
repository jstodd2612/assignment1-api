var request = require('superagent'),
    host = 'http://whoismyrepresentative.com/getall_';

exports.allByZip = function(zip, callback) {
  request
    .get(host + 'mems.php')
    .query({
      zip: zip,
      output: 'json'
    })
    .end(function(err, res) {
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    });
};


exports.repsByName = function(lastName, callback) {
  request
    .get(host + 'reps_byname.php')
    .query({
      name: lastName,
      output: 'json'
    })
    .end(function(err, res) {
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    });
};


exports.repsByState = function(state, callback) {
  request
    .get(host + 'reps_bystate.php')
    .query({
      state: state,
      output: 'json'
    })
    .end(function(err, res) {
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    });
};


exports.sensByName = function(lastName, callback) {
  request
    .get(host + 'sens_byname.php')
    .query({
      name: lastName,
      output: 'json'
    })
    .end(function(err, res) {
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    });
};


exports.sensByState = function(state, callback) {
  request
    .get(host + 'sens_bystate.php')
    .query({
      state: state,
      output: 'json'
    })
    .end(function(err, res) {
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    });
};
