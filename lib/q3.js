// This is a mock database implementation with just a connect function
// db.connect will need to be called a total of 10 times before it successfully connects
var counter = 0;
var db = {
  connect: function(cb) {
    console.log('connection attempt', counter + 1);

    if (counter < 9) {
      counter++;
      return cb('db not ready yet');
    }

    return cb();
  }
};

// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and return
function connect(callback, attempt) {
  attempt = attempt || 1;
  db.connect(function (err) {
    if (err) {
      return setTimeout(() => connect(callback, ++attempt), Math.pow(attempt, 2));
    }

    callback(err);
  });
}

connect(function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('successfully connected!');
});
