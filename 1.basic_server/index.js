
//Basic server example
const http = require('http');

http.createServer((req,resp) =>
{
resp.write("<h1>I have created basic node server.</h1>");
resp.end();
}).listen(4500);