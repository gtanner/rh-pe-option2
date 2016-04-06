function foo(callback) {
  var doThing = require('./doThing');

  // realistically the original code wasn't doing anything
  // in the callback function other then just attempting
  // to call the callback with an error, just feels better
  // to refactor this to just pass the callback provided
  // to `doThing`
  //
  // mind you at this point I would just refactor out this
  // module and have everyone use doThing directly since
  // this serves no point anymore.
	doThing(callback);
}

module.exports = foo;
