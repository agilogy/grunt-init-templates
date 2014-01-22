var
	express = require('express'),
	http = require('http');

var app = express()
  .use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000'))
  .use(express.static(__dirname + '/_dist'));

http.createServer(app).listen(4000);