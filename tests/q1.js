var tap = require('tap');
var mock = require('mock-require');
var foo = require('../lib/q1');

tap.test('it works when there are no errors', function (t) {
  mock('./../lib/doThing', (cb) => cb(null, 'result'));

  foo(function(err, res){
    tap.equal(err, null, 'no error');
    tap.equal(res, 'result', 'result should be same');
    mock.stopAll();
    t.end();
  });
});

tap.test('it works when there are errors', function (t) {
  var expected = new Error('expected');
  mock('./../lib/doThing', (cb) => cb(expected));

  foo(function(err, res){
    tap.equal(err, expected, 'should be an error');
    mock.stopAll();
    t.end();
  });
});
