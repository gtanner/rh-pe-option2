function foo(callback) {
  var doThing = require('./doThing');

	doThing(callback);
}

module.exports = foo;
