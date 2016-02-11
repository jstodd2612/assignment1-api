var request = require('superagent');

var makeRequest = function(group, type) {
  return function(param, callback) {
  var path = ('http://whoismyrepresentative.com/getall_' + group + '.php?'  + type + '=' + param + '&output=json');
  request
    .get(path)
    .end(function(err, res) {
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    });
  };
};

exports.allByZip = makeRequest('mems', 'zip');
exports.allByZip = makeRequest('mems', 'zip');
exports.repsByName = makeRequest('reps_byname', 'name');
exports.repsByState = makeRequest('reps_bystate', 'state');
exports.sensByName = makeRequest('sens_byname', 'name');
exports.sensByState = makeRequest('sens_bystate', 'state');
