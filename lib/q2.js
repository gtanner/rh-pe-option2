function remoteMathService(cb) {
  callOneService(function (err, one) {
    callTwoService(function (err, two) {
      cb(undefined, one + two);
    });
  });
}

function callOneService(cb) {
  setTimeout(function() {
    return cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    return cb(undefined, 2);
  }, 1500);
}

module.exports = remoteMathService;
