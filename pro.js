// define middleware
function MiddleWare() {
  this.interceptors = [];
}

MiddleWare.prototype.use = function (func) {
  this.interceptors.push(func);
}

MiddleWare.prototype.run = function (func) {
  const vm = this;
  vm.interceptors.push(func);

  let n = vm.interceptors.length;
  function execute(i) {
    if(i ==n ) {
      return vm.interceptors[n];
    } else {
      return vm.interceptors[i].bind(vm , execute(i+1));
    }
  }

  let f = execute(0);
  f();
}

let middleware = new MiddleWare();


function func1(done) {
  this.temp1 = "func1";
  setTimeout(function() {
    done();
    console.log('f1');
  }, 1000);
}

function func2(done) {
  this.temp2 = "func2";
  setTimeout(function() {
    done();
    console.log('f2');
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
