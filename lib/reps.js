var request = require('superagent');
var host = 'http://whoismyrepresentative.com';

var makeRequest = function(call, queryParam) {
  return function(param, callback) {
    var query = {
      output: 'json',
    };
    query[queryParam] = param;

    request
      .get(host + call)
      .query(query)
      .end(function(err, res) {
        if(err) { return callback(err); }
        try {
          callback(null, JSON.parse(res.text).results);
        } catch(e) {
          callback(null, []);
        }
      });
  };
};

exports.allByZip = makeRequest('/getall_mems.php', 'zip');
exports.repsByName = makeRequest('/getall_reps_byname.php', 'name');
exports.repsByState= makeRequest('/getall_reps_bystate.php', 'state');
exports.sensByName = makeRequest('/getall_sens_byname.php', 'name');
exports.sensByState= makeRequest('/getall_sens_bystate.php', 'state');
