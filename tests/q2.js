var tap = require('tap');
var remoteMathService = require('../lib/q2');

tap.test('we get the answer three', function (t) {
  remoteMathService(function(err, answer) {
    t.equal(err, undefined);
    t.equal(answer, 3);
    t.end();
  });
});
