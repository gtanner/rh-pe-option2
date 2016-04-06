function foo(callback) {
  var doThing = require('./doThing');

	doThing(function(err, res) {
    callback(err, res);
	});
}

module.exports = foo;
