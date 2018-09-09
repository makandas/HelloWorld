var http = require('http');

var port            = process.env.PORT || 3000;

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end("Hello World"); //write a response to the client
};
var www = http.createServer(handleRequest);
www.listen(port);
