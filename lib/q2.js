var async = require('async');

function callOneService(cb) {
  setTimeout(function() {
    return cb(null, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    return cb(null, 2);
  }, 1500);
}

module.exports = function remoteMathService(cb) {
  async.parallel({
    one: callOneService,
    two: callTwoService
  }, function (err, result) {
    if (err) return cb(err);
    cb(null, result.one + result.two);
  });
};
