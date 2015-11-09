// Creation and running of the Server
var http = require('http');
function dealWithWebRequest(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Node.js");
response.end();
}
var webserver = http.createServer(dealWithWebRequest).listen(8124,"0.0.0.0");
webserver.once('listening', function() {
console.log('Server running at http://127.0.0.1:8124/');
});