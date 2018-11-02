var http = require('http');

var server = http.createServer((request, response) =>{
  console.log('Hi got a request',request.url);
  if(request.url === "/lol"){
      response.write("Hello World lol");
  }else {
    response.write({status:200});
  }
  response.end();
});

server.listen(3000);
