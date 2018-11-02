// define middleware
function func1(done) {
  this.temp1 = "func1";
  setTimeout(function() {
    done();
  }, 1000);
}

function func2(done) {
  this.temp2 = "func2";
  setTimeout(function() {
    done();
  }, 2000);
}

var startTime = Date.now();

middleware.use(func1);
middleware.use(func2);

middleware.run( function func3(){
  console.log(this.temp1); // should print func1
  console.log(this.temp2); // should print func2
  setTimeout(function() {
    console.log('finished');
    var timeTaken = Date.now() - startTime;
    console.log("Time Taken is ", timeTaken/1000); // should be around 6 secs
  }, 3000);
});
